package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

    Optional<Quiz> findByIdentifier(String identifier);

    @Query("SELECT q FROM Quiz q " +
            "JOIN q.questions qs " +
            "WHERE qs.id = :questionId")
    Optional<Quiz> findByQuestionsId(@Param("questionId") Long questionId);
}
