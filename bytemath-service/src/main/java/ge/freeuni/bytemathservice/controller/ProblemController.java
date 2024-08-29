package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.ProblemCompletionStatsDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.service.BytemathUserService;
import ge.freeuni.bytemathservice.service.ProblemService;
import ge.freeuni.bytemathservice.service.UserProblemCompletionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/problems")
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;
    private final BytemathUserService bytemathUserService;
    private final UserProblemCompletionService userProblemCompletionService;


    @GetMapping("/course/{identifier}")
    public ResponseEntity<List<ProblemSummaryDTO>> getProblemsByCourse(@PathVariable String identifier, @RequestParam(required = false, defaultValue = "ENG") String language) {
        List<ProblemSummaryDTO> problems = problemService.getProblemsByCourse(identifier, language);
        return ResponseEntity.ok(problems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProblemDTO> getProblemById(@PathVariable Long id) {
        ProblemDTO problem = problemService.getProblemById(id);
        return ResponseEntity.ok(problem);
    }

    @PostMapping("/{id}/complete")
    public ResponseEntity<Void> markProblemAsCompleted(@PathVariable Long id) {
        BytemathUser currentUser = bytemathUserService.getCurrentUser();
        userProblemCompletionService.markProblemAsCompleted(currentUser, id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/completion-stats")
    public ResponseEntity<ProblemCompletionStatsDTO> getProblemCompletionStats() {
        var currentUser = bytemathUserService.getCurrentUser();
        ProblemCompletionStatsDTO stats = userProblemCompletionService.getProblemCompletionStats(currentUser);
        return ResponseEntity.ok(stats);
    }
}
