package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.GradedQuestion;
import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.SubmittedAnswer;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import ge.freeuni.bytemathservice.domain.entity.Question;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.domain.enums.QuestionType;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GradeQuizService {

    private final QuizRepository quizRepository;

    public GradedQuiz gradeQuiz(String quizIdentifier, String language, SubmittedQuiz request) {
        Quiz quiz = quizRepository.findByIdentifier(quizIdentifier).orElseThrow(RuntimeException::new);

        Map<Long, Question> questionsMap = quiz.getQuestions()
                .stream()
                .collect(Collectors.toMap(Question::getId, q -> q));

        Map<Long, SubmittedAnswer> submittedAnswersMap = request.getAnswers()
                .stream()
                .collect(Collectors.toMap(SubmittedAnswer::getQuestionId, a -> a));

        List<GradedQuestion> results = questionsMap.values()
                .stream()
                .map(question -> {
                    SubmittedAnswer submittedAnswer = submittedAnswersMap.get(question.getId());
                    if (submittedAnswer != null) {
                        return gradeQuestion(submittedAnswer, question, language);
                    } else {
                        return createUnansweredGradedQuestion(question, language);
                    }
                })
                .collect(Collectors.toList());

        int correctCount = (int) results.stream().filter(GradedQuestion::isCorrect).count();

        return GradedQuiz.builder()
                .correctAnswers(correctCount)
                .totalQuestions(quiz.getQuestions().size())
                .results(results)
                .build();
    }

    private GradedQuestion createUnansweredGradedQuestion(Question question, String language) {
        return GradedQuestion.builder()
                .questionId(question.getId())
                .correct(false)
                .correctAnswer(getCorrectAnswerText(question, language))
                .userAnswer(language.equals("ENG") ? "Not answered" : "არ დაფიქსირებულა")
                .build();
    }

    private String getCorrectAnswerText(Question question, String language) {
        return question.getAnswers().stream()
                .filter(Answer::getIsCorrect)
                .findFirst()
                .map(language.equals("ENG") ? Answer::getAnswerTextEng : Answer::getAnswerTextGeo)
                .orElse(language.equals("ENG") ? "No correct answer found" : "სწორი პასუხი ვერ მოიძებნა");
    }

    private GradedQuestion gradeQuestion(SubmittedAnswer submittedAnswer, Question question, String language) {
        boolean isCorrect = false;
        String correctAnswerEng = "";
        String correctAnswerGeo = "";
        String userAnswerEng = "";
        String userAnswerGeo = "";

        if (question.getQuestionType() == QuestionType.SINGLE_CHOICE) {
            Answer correctAnswerDTO = question.getAnswers().stream()
                    .filter(Answer::getIsCorrect)
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("No correct answer found for question: " + question.getId()));

            correctAnswerEng = correctAnswerDTO.getAnswerTextEng();
            correctAnswerGeo = correctAnswerDTO.getAnswerTextGeo();

            Answer userAnswerDTO = question.getAnswers().stream()
                    .filter(a -> a.getId().equals(submittedAnswer.getSelectedAnswerId()))
                    .findFirst()
                    .orElse(null);

            if (userAnswerDTO != null) {
                userAnswerEng = userAnswerDTO.getAnswerTextEng();
                userAnswerGeo = userAnswerDTO.getAnswerTextGeo();
            }

            isCorrect = correctAnswerDTO.getId().equals(submittedAnswer.getSelectedAnswerId());
        } else if (question.getQuestionType() == QuestionType.TEXT) {
            correctAnswerEng = question.getAnswers().get(0).getAnswerTextEng();
            correctAnswerGeo = question.getAnswers().get(0).getAnswerTextGeo();

            String userAnswer = submittedAnswer.getTextAnswer();

            isCorrect = correctAnswerEng.equalsIgnoreCase(userAnswer.trim()) ||
                    correctAnswerGeo.equalsIgnoreCase(userAnswer.trim());
        }

        return GradedQuestion.builder()
                .questionId(question.getId())
                .correct(isCorrect)
                .correctAnswer(language.equals("ENG") ? correctAnswerEng : correctAnswerGeo)
                .userAnswer(language.equals("ENG") ? userAnswerEng : userAnswerGeo)
                .build();
    }

}
