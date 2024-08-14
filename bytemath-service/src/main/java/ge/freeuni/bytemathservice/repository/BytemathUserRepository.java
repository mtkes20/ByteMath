package ge.freeuni.bytemathservice.repository;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BytemathUserRepository extends JpaRepository<BytemathUser, Long> {

    Optional<BytemathUser> findByUsername(String username);
}
