package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.repository.BytemathUserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

@Service
public class BytemathUserService {
    private final BytemathUserRepository bytemathUserRepository;

    public BytemathUserService(BytemathUserRepository bytemathUserRepository) {
        this.bytemathUserRepository = bytemathUserRepository;
    }

    public BytemathUser getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !(authentication.getPrincipal() instanceof Jwt)) {
            return null;
        }

        Jwt jwt = (Jwt) authentication.getPrincipal();
        String username = jwt.getClaimAsString("preferred_username");

        return bytemathUserRepository.findByUsername(username)
                .orElseGet(() -> createUser(jwt));
    }

    private BytemathUser createUser(Jwt jwt) {
        BytemathUser newBytemathUser = new BytemathUser();
        newBytemathUser.setUsername(jwt.getClaimAsString("preferred_username"));
        return bytemathUserRepository.save(newBytemathUser);
    }
}
