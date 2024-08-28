package ge.freeuni.bytemathservice.domain.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "TEST_CASE", schema = "BYTEMATH")
public class TestCase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)
    private Long id;

    @Column(length = 1000)
    private String input;

    @Column(length = 1000)
    private String expectedOutput;

    @ManyToOne
    @JoinColumn(name = "PROBLEM_ID")
    private Problem problem;
}
