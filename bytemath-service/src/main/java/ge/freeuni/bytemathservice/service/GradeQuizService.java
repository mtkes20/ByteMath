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
        Quiz quiz = quizRepository.findByIdentifierAndLanguage(quizIdentifier, language).orElseThrow(RuntimeException::new);

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
                        return gradeQuestion(submittedAnswer, question);
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
                .correctAnswer(getCorrectAnswerText(question))
                .userAnswer(language.equals("ENG") ? "Not answered" : "არ დაფიქსირებულა")
                .build();
    }

    private String getCorrectAnswerText(Question question) {
        return question.getAnswers().stream()
                .filter(Answer::getIsCorrect)
                .findFirst()
                .map(Answer::getAnswerText)
                .orElse("No correct answer found");
    }

    private GradedQuestion gradeQuestion(SubmittedAnswer submittedAnswer, Question question) {
        boolean isCorrect = false;
        String correctAnswer = "";
        String userAnswer = "";

        if (question.getQuestionType() == QuestionType.SINGLE_CHOICE) {
            Answer correctAnswerDTO = question.getAnswers().stream()
                    .filter(Answer::getIsCorrect)
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("No correct answer found for question: " + question.getId()));

            correctAnswer = correctAnswerDTO.getAnswerText();
            userAnswer = question.getAnswers()
                    .stream()
                    .filter(a -> a.getId().equals(submittedAnswer.getSelectedAnswerId()))
                    .findFirst()
                    .map(Answer::getAnswerText)
                    .orElse("");

            isCorrect = correctAnswerDTO.getId().equals(submittedAnswer.getSelectedAnswerId());
        } else if (question.getQuestionType() == QuestionType.TEXT) {
            correctAnswer = question.getAnswers().get(0).getAnswerText();
            userAnswer = submittedAnswer.getTextAnswer();
            isCorrect = correctAnswer.equalsIgnoreCase(userAnswer.trim());
        }

        return GradedQuestion.builder()
                .questionId(question.getId())
                .correct(isCorrect)
                .correctAnswer(correctAnswer)
                .userAnswer(userAnswer)
                .build();
    }
}
