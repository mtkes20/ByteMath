package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PageRepository extends JpaRepository<Page, Long> {

    Optional<Page> findById(long id);
}
