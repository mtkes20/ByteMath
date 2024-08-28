package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
import ge.freeuni.bytemathservice.service.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/problems")
public class ProblemController {

    private final ProblemService problemService;

    @Autowired
    public ProblemController(ProblemService problemService) {
        this.problemService = problemService;
    }

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
}
