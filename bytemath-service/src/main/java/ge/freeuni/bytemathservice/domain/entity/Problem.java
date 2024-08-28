package ge.freeuni.bytemathservice.domain.entity;

import ge.freeuni.bytemathservice.domain.enums.ProblemDifficulty;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;

@Entity
@Data
@Table(name = "PROBLEM", schema = "BYTEMATH")
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)
    private Long id;

    private String identifier;

    private String title;

    @Column(length = 1000)
    private String description;

    @Column(length = 1000)
    private String task;

    private String inputFormat;

    private String outputFormat;

    private String example;

    private String note;

    @Column(length = 1000)
    private String pythonTemplate;

    @Column(length = 1000)
    private String javaTemplate;

    @OneToMany(mappedBy = "problem")
    @Cascade(CascadeType.ALL)
    private List<TestCase> testCases;

    @Embedded
    private LockedLines lockedLines;

    @Embeddable
    @Data
    public static class LockedLines {
        private Integer python;
        private Integer java;
    }

    @Enumerated(EnumType.STRING)
    private ProblemDifficulty difficulty;

    private String language;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COURSE_ID")
    private Course course;
}
