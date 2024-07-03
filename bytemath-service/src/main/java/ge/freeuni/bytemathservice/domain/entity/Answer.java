package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ANSWER", schema = "BYTEMATH")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String answerText;

    private Boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "ID", nullable = false)
    private Question question;
}
