package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.api.QuizResponseWrapper;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.service.BytemathUserService;
import ge.freeuni.bytemathservice.service.GradeQuizService;
import ge.freeuni.bytemathservice.service.QuizService;
import ge.freeuni.bytemathservice.service.UserQuizSubmissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("{identifier}")
    public ResponseEntity<QuizResponseWrapper> getQuizByIdentifier(@PathVariable String identifier, @RequestParam(required = false, defaultValue = "ENG") String language) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        Optional<GradedQuiz> gradedQuiz = userQuizSubmissionService.getGradedQuizForUser(currentUser, identifier);
        if (gradedQuiz.isPresent()) {
            return ResponseEntity.ok(new QuizResponseWrapper(gradedQuiz.get()));
        } else {
            QuizDTO quiz = quizService.getQuizByIdentifier(identifier, language);
            return ResponseEntity.ok(new QuizResponseWrapper(quiz));
        }
    }

    @PostMapping("/{identifier}/submit")
    public ResponseEntity<GradedQuiz> submitQuizAnswers(@PathVariable String identifier, @RequestParam(required = false, defaultValue = "ENG") String language, @RequestBody SubmittedQuiz request) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        GradedQuiz gradedQuiz = gradeQuizService.gradeQuiz(identifier, language, request);
        userQuizSubmissionService.saveUserQuizSubmission(currentUser, request, gradedQuiz);
        return ResponseEntity.ok(gradedQuiz);
    }
}
