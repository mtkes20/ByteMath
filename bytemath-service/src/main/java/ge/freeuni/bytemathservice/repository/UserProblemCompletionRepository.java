package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import ge.freeuni.bytemathservice.domain.entity.UserProblemCompletion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserProblemCompletionRepository extends JpaRepository<UserProblemCompletion, Long> {

    List<UserProblemCompletion> findByUser(BytemathUser user);

    Optional<UserProblemCompletion> findByUserAndProblem(BytemathUser user, Problem problem);
}
