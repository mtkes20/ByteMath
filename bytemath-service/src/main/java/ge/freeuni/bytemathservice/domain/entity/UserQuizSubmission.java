package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "BYTEMATH_USER_QUIZ_SUBMISSIONS", schema = "BYTEMATH")
@Getter
@Setter
public class UserQuizSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)
    private Long id;

    private String quizIdentifier;

    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private BytemathUser user;

    @Column(nullable = false)
    private Long quizId;

    @ElementCollection
    @CollectionTable(name = "BYTEMATH_USER_QUIZ_SUBMISSION_ANSWERS", schema = "BYTEMATH", joinColumns = @JoinColumn(name = "SUBMISSION_ID"))
    private List<SubmittedAnswerEntity> submittedAnswers = new ArrayList<>();

    @Column(nullable = false)
    private Integer score;

    @Column(nullable = false)
    private Integer maxScore;
}
