package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.service.BytemathUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/profile-picture")
public class ProfilePictureController {

    @Autowired
    private BytemathUserService bytemathUserService;

    @PostMapping
    public ResponseEntity<String> uploadProfilePicture(@RequestParam("file") MultipartFile file) {
        try {
            bytemathUserService.saveProfilePicture(file);
            return ResponseEntity.ok("Profile picture uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to upload profile picture: " + e.getMessage());
        }
    }

    @GetMapping(produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getProfilePicture() {
        byte[] profilePicture = bytemathUserService.getProfilePicture();
        String contentType = bytemathUserService.getProfilePictureContentType();

        if (profilePicture != null && contentType != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(profilePicture);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
