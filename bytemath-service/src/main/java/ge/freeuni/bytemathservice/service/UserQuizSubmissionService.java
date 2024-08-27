package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.GradedQuestion;
import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.SubmittedAnswer;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.SubmittedAnswerEntity;
import ge.freeuni.bytemathservice.domain.entity.UserQuizSubmission;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import ge.freeuni.bytemathservice.repository.UserQuizSubmissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserQuizSubmissionService {

    private final UserQuizSubmissionRepository userQuizSubmissionRepository;

    private final QuizService quizService;

    private final QuizRepository quizRepository;

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

    public Optional<GradedQuiz> getGradedQuizForUser(BytemathUser user, String quizIdentifier) {
        return userQuizSubmissionRepository.findByUserAndQuizIdentifier(user, quizIdentifier)
                .map(submission -> new GradedQuiz(
                        submission.getScore(),
                        submission.getMaxScore(),
                        submission.getSubmittedAnswers().stream()
                                .map(this::convertToGradedQuestion)
                                .collect(Collectors.toList())
                ));
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

    private GradedQuestion convertToGradedQuestion(SubmittedAnswerEntity submittedAnswer) {
        String correctAnswer = quizService.getCorrectAnswer(submittedAnswer.getQuestionId());
        String userAnswer = submittedAnswer.getSelectedAnswerId() != null
                ? submittedAnswer.getSelectedAnswerId().toString()
                : submittedAnswer.getTextAnswer();
        boolean isCorrect = correctAnswer.equals(userAnswer);
        return GradedQuestion.builder()
                .questionId(submittedAnswer.getQuestionId())
                .correct(isCorrect)
                .correctAnswer(correctAnswer)
                .userAnswer(userAnswer)
                .build();
    }
}
