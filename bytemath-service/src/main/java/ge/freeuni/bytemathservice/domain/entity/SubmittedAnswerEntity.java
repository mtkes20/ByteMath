package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class SubmittedAnswerEntity {
    @Column(name = "QUESTION_ID")
    private Long questionId;

    @Column(name = "SELECTED_ANSWER_ID")
    private Long selectedAnswerId;

    @Column(name = "TEXT_ANSWER")
    private String textAnswer;
}
