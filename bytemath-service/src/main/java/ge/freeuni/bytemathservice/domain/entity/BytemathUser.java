package ge.freeuni.bytemathservice.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
@Table(name = "BYTEMATH_USER", schema = "BYTEMATH")
@EqualsAndHashCode(of = "id")
public class BytemathUser {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name = "seq_generator", schema = "BYTEMATH", sequenceName = "BYTEMATH_GLOBAL_SEQUENCE", allocationSize = 1)
    private Long id;

    private String username;

    @Column(name = "PROFILE_PICTURE", columnDefinition = "TEXT")
    private String profilePicture;

    @Column(name = "PROFILE_PICTURE_CONTENT_TYPE")
    private String profilePictureContentType;

    @ManyToMany
    @JoinTable(
            name = "BYTEMATH_USER_READ_PAGES",
            schema = "BYTEMATH",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "PAGE_ID")
    )
    private Set<Page> readPages = new HashSet<>();
}
