package ge.freeuni.bytemathservice.service.impl;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.repository.BytemathUserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class BytemathUserServiceImpl implements ge.freeuni.bytemathservice.service.BytemathUserService {
    private final BytemathUserRepository bytemathUserRepository;

    public BytemathUserServiceImpl(BytemathUserRepository bytemathUserRepository) {
        this.bytemathUserRepository = bytemathUserRepository;
    }

    @Override
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

    @Override
    public BytemathUser createUser(Jwt jwt) {
        BytemathUser newBytemathUser = new BytemathUser();
        newBytemathUser.setUsername(jwt.getClaimAsString("preferred_username"));
        return bytemathUserRepository.save(newBytemathUser);
    }

    @Override
    public void saveProfilePicture(MultipartFile file) throws IOException {
        BytemathUser currentUser = getCurrentUser();
        if (currentUser != null) {
            currentUser.setProfilePicture(file.getBytes());
            currentUser.setProfilePictureContentType(file.getContentType());
            bytemathUserRepository.save(currentUser);
        }
    }

    @Override
    public byte[] getProfilePicture() {
        BytemathUser currentUser = getCurrentUser();
        return currentUser != null ? currentUser.getProfilePicture() : null;
    }

    @Override
    public String getProfilePictureContentType() {
        BytemathUser currentUser = getCurrentUser();
        return currentUser != null ? currentUser.getProfilePictureContentType() : null;
    }
}
