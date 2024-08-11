package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "BYTEMATH_USER", schema = "BYTEMATH")
public class BytemathUser {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)    private Long id;

    private String username;

    @ManyToMany
    @JoinTable(
            name = "BYTEMATH_USER_READ_PAGES",
            schema = "BYTEMATH",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "PAGE_ID")
    )
    private Set<Page> readPages = new HashSet<>();
}
