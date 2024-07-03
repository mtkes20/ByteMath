package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping("{identifier}")
    public ResponseEntity<QuizDTO> getQuizByIdentifier(@PathVariable String identifier) {
        return ResponseEntity.ok(quizService.getQuizByIdentifier(identifier));
    }

}
