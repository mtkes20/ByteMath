package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {

    @Query("SELECT new ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO(p.id, p.title) FROM Problem p WHERE p.course.name = :identifier AND p.language = :language")
    List<ProblemSummaryDTO> findProblemSummariesByCourseId(String identifier, String language);
}
