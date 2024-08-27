package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.repository.BytemathUserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class BytemathUserService {
    private final BytemathUserRepository bytemathUserRepository;

    public BytemathUserService(BytemathUserRepository bytemathUserRepository) {
        this.bytemathUserRepository = bytemathUserRepository;
    }

    public BytemathUser getCurrentUser() {
        Jwt jwt = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = jwt.getClaimAsString("preferred_username");

        return bytemathUserRepository.findByUsername(username)
                .orElseGet(() -> createUser(jwt));
    }
    private BytemathUser createUser(Jwt jwt) {
        BytemathUser newBytemathUser = new BytemathUser();
        newBytemathUser.setUsername(jwt.getClaimAsString("preferred_username"));
        return bytemathUserRepository.save(newBytemathUser);
    }

    public void saveProfilePicture(MultipartFile file) throws IOException {
        BytemathUser currentUser = getCurrentUser();
        if (currentUser != null) {
            currentUser.setProfilePicture(file.getBytes());
            currentUser.setProfilePictureContentType(file.getContentType());
            bytemathUserRepository.save(currentUser);
        }
    }

    public byte[] getProfilePicture() {
        BytemathUser currentUser = getCurrentUser();
        return currentUser != null ? currentUser.getProfilePicture() : null;
    }

    public String getProfilePictureContentType() {
        BytemathUser currentUser = getCurrentUser();
        return currentUser != null ? currentUser.getProfilePictureContentType() : null;
    }
}
