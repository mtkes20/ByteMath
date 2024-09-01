package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.GradedQuestion;
import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.SubmittedAnswer;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Question;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.domain.entity.SubmittedAnswerEntity;
import ge.freeuni.bytemathservice.domain.entity.UserQuizSubmission;
import ge.freeuni.bytemathservice.repository.AnswerRepository;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import ge.freeuni.bytemathservice.repository.UserQuizSubmissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserQuizSubmissionService {

    private final UserQuizSubmissionRepository userQuizSubmissionRepository;

    private final QuizRepository quizRepository;

    private final AnswerRepository answerRepository;

    @Transactional
    public void saveUserQuizSubmission(BytemathUser user, SubmittedQuiz submittedQuiz, GradedQuiz gradedQuiz) {
        String identifier = quizRepository.findById(submittedQuiz.getId()).get().getIdentifier();
        Optional<UserQuizSubmission> userQuizSubmission = userQuizSubmissionRepository.findByUserAndQuizIdentifier(user, identifier);
        UserQuizSubmission submission;
        submission = userQuizSubmission.orElseGet(UserQuizSubmission::new);
        submission.setUser(user);
        submission.setQuizId(submittedQuiz.getId());
        submission.setQuizIdentifier(identifier);
        submission.setSubmittedAnswers(
                submittedQuiz.getAnswers().stream()
                        .map(this::convertToSubmittedAnswerEntity)
                        .collect(Collectors.toList())
        );
        submission.setScore(gradedQuiz.getCorrectAnswers());
        submission.setMaxScore(gradedQuiz.getTotalQuestions());

        userQuizSubmissionRepository.save(submission);
    }

    public Optional<GradedQuiz> getGradedQuizForUser(BytemathUser user, String quizIdentifier, String language) {
        Optional<Quiz> quiz = quizRepository.findByIdentifier(quizIdentifier);
        return userQuizSubmissionRepository.findByUserAndQuizIdentifier(user, quizIdentifier)
                .flatMap(submission -> quiz.map(q -> new GradedQuiz(
                        submission.getScore(),
                        submission.getMaxScore(),
                        q.getQuestions().stream()
                                .sorted(Comparator.comparing(Question::getId))
                                .map(question -> convertToGradedQuestion(question, submission, language))
                                .collect(Collectors.toList())
                )));
    }

    private GradedQuestion convertToGradedQuestion(Question question, UserQuizSubmission submission, String language) {
        String correctAnswer = language.equals("ENG")
                ? question.getAnswers().stream()
                .filter(Answer::getIsCorrect)
                .map(Answer::getAnswerTextEng)
                .findFirst()
                .orElse("Not Answered")
                : question.getAnswers().stream()
                .filter(Answer::getIsCorrect)
                .map(Answer::getAnswerTextGeo)
                .findFirst()
                .orElse("არ დაფიქსირებულა");

        SubmittedAnswerEntity submittedAnswer = submission.getSubmittedAnswers().stream()
                .filter(answer -> answer.getQuestionId().equals(question.getId()))
                .findFirst()
                .orElse(null);

        String userAnswer = language.equals("ENG") ? "Not answered" : "არ დაფიქსირებულა";
        if (submittedAnswer != null) {
            userAnswer = language.equals("ENG")
                    ? submittedAnswer.getSelectedAnswerId() != null
                    ? answerRepository.findAnswerTextEngById(submittedAnswer.getSelectedAnswerId())
                    : submittedAnswer.getTextAnswer()
                    : submittedAnswer.getSelectedAnswerId() != null
                    ? answerRepository.findAnswerTextGeoById(submittedAnswer.getSelectedAnswerId())
                    : submittedAnswer.getTextAnswer();
        }

        boolean isCorrect = correctAnswer.equals(userAnswer);

        return GradedQuestion.builder()
                .questionId(question.getId())
                .correct(isCorrect)
                .correctAnswer(correctAnswer)
                .userAnswer(userAnswer)
                .build();
    }


    public void deleteUserQuizSubmission(BytemathUser user, String quizIdentifier) {
        userQuizSubmissionRepository.delete(userQuizSubmissionRepository.findByUserAndQuizIdentifier(user, quizIdentifier).orElseThrow(RuntimeException::new));
    }

    private SubmittedAnswerEntity convertToSubmittedAnswerEntity(SubmittedAnswer answer) {
        SubmittedAnswerEntity entity = new SubmittedAnswerEntity();
        entity.setQuestionId(answer.getQuestionId());
        entity.setSelectedAnswerId(answer.getSelectedAnswerId());
        entity.setTextAnswer(answer.getTextAnswer());
        return entity;
    }

}
