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

    private String titleEng;

    private String titleGeo;

    @Column(length = 1000)
    private String descriptionEng;

    @Column(length = 1000)
    private String descriptionGeo;

    @Column(length = 1000)
    private String taskEng;

    @Column(length = 1000)
    private String taskGeo;

    private String inputFormatEng;

    private String inputFormatGeo;

    private String outputFormatEng;

    private String outputFormatGeo;

    private String exampleEng;

    private String exampleGeo;

    private String noteEng;

    private String noteGeo;

    @Column(length = 1000)
    private String pythonTemplateEng;

    @Column(length = 1000)
    private String pythonTemplateGeo;

    @Column(length = 1000)
    private String javaTemplateEng;

    @Column(length = 1000)
    private String javaTemplateGeo;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COURSE_ID")
    private Course course;
}
