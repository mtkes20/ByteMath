package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query("SELECT a.answerTextEng FROM Answer a WHERE a.id = :id")
    String findAnswerTextEngById(@Param("id") Long id);

    @Query("SELECT a.answerTextGeo FROM Answer a WHERE a.id = :id")
    String findAnswerTextGeoById(@Param("id") Long id);
}
