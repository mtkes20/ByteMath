package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "PAGE", schema = "BYTEMATH")
public class Page {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)    private Long id;

    private String title;
    private String content;

    @ManyToMany(mappedBy = "readPages")
    private Set<BytemathUser> readBy = new HashSet<>();

    public void markAsReadBy(BytemathUser bytemathUser) {
        this.readBy.add(bytemathUser);
        bytemathUser.getReadPages().add(this);
    }
}
