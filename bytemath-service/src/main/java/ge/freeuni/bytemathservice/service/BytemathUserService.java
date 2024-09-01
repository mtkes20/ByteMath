package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface BytemathUserService {

    BytemathUser getCurrentUser();

    BytemathUser createUser(Jwt jwt);

    void saveProfilePicture(MultipartFile file) throws IOException;

    byte[] getProfilePicture();

    String getProfilePictureContentType();
}
