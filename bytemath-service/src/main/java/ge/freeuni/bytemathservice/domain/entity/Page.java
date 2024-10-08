package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "PAGE", schema = "BYTEMATH")
@EqualsAndHashCode(of = "id")
public class Page {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)
    private Long id;

    private String identifier;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COURSE_ID")
    private Course course;

    @ManyToMany(mappedBy = "readPages")
    private Set<BytemathUser> readBy = new HashSet<>();

    public void markAsReadBy(BytemathUser bytemathUser) {
        this.readBy.add(bytemathUser);
        bytemathUser.getReadPages().add(this);
    }
}
