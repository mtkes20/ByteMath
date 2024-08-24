package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.UserQuizSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserQuizSubmissionRepository extends JpaRepository<UserQuizSubmission, Long> {

    Optional<UserQuizSubmission> findByUserAndQuizIdentifier(BytemathUser user, String quizIdentifier);
}
