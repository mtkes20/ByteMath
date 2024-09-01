package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.GradedQuestion;
import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.SubmittedAnswer;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Question;
import ge.freeuni.bytemathservice.domain.entity.SubmittedAnswerEntity;
import ge.freeuni.bytemathservice.domain.entity.UserQuizSubmission;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserQuizSubmissionService {
    @Transactional
    void saveUserQuizSubmission(BytemathUser user, SubmittedQuiz submittedQuiz, GradedQuiz gradedQuiz);

    Optional<GradedQuiz> getGradedQuizForUser(BytemathUser user, String quizIdentifier, String language);

    GradedQuestion convertToGradedQuestion(Question question, UserQuizSubmission submission, String language);

    void deleteUserQuizSubmission(BytemathUser user, String quizIdentifier);

    SubmittedAnswerEntity convertToSubmittedAnswerEntity(SubmittedAnswer answer);
}
