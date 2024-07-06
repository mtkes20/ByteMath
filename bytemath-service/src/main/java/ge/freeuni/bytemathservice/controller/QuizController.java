package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.service.GradeQuizService;
import ge.freeuni.bytemathservice.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    private final GradeQuizService gradeQuizService;

    @GetMapping("{identifier}")
    public ResponseEntity<QuizDTO> getQuizByIdentifier(@PathVariable String identifier) {
        return ResponseEntity.ok(quizService.getQuizByIdentifier(identifier));
    }

    @PostMapping("/{identifier}/submit")
    public ResponseEntity<GradedQuiz> submitQuizAnswers(@PathVariable String identifier, @RequestBody SubmittedQuiz request) {
        GradedQuiz response = gradeQuizService.gradeQuiz(identifier, request);
        return ResponseEntity.ok(response);
    }
}
