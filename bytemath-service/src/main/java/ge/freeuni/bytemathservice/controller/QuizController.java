package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.api.QuizResponseWrapper;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.request.QuizCreationRequest;
import ge.freeuni.bytemathservice.service.BytemathUserService;
import ge.freeuni.bytemathservice.service.GradeQuizService;
import ge.freeuni.bytemathservice.service.QuizService;
import ge.freeuni.bytemathservice.service.UserQuizSubmissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    private final GradeQuizService gradeQuizService;

    private final UserQuizSubmissionService userQuizSubmissionService;

    private final BytemathUserService bytemathUserService;

    @PostMapping
    public ResponseEntity<QuizDTO> createQuiz(@RequestBody QuizCreationRequest request) {
        QuizDTO createdQuiz = quizService.createQuiz(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdQuiz);
    }

    @GetMapping("{identifier}")
    public ResponseEntity<QuizResponseWrapper> getQuizByIdentifier(@PathVariable String identifier, @RequestParam(required = false, defaultValue = "ENG") String language) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        Optional<GradedQuiz> gradedQuiz = userQuizSubmissionService.getGradedQuizForUser(currentUser, identifier, language);
        QuizDTO quiz = quizService.getQuizByIdentifier(identifier, language);
        return gradedQuiz.map(value -> ResponseEntity.ok(new QuizResponseWrapper(true, quiz, value))).orElseGet(() -> ResponseEntity.ok(new QuizResponseWrapper(quiz)));
    }

    @PostMapping("{identifier}/submit")
    public ResponseEntity<GradedQuiz> submitQuizAnswers(@PathVariable String identifier, @RequestParam(required = false, defaultValue = "ENG") String language, @RequestBody SubmittedQuiz request) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        GradedQuiz gradedQuiz = gradeQuizService.gradeQuiz(identifier, language, request);
        if (currentUser != null) {
            userQuizSubmissionService.saveUserQuizSubmission(currentUser, request, gradedQuiz);
        }
        return ResponseEntity.ok(gradedQuiz);
    }

    @DeleteMapping("{identifier}")
    public ResponseEntity<Void> deleteQuizSubmission(@PathVariable String identifier) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        userQuizSubmissionService.deleteUserQuizSubmission(currentUser, identifier);
        return ResponseEntity.ok().build();
    }
}
