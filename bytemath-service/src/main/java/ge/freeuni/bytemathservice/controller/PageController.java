package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.service.PageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pages")
public class PageController {

    private final PageService pageService;

    public PageController(PageService pageService) {
        this.pageService = pageService;
    }

    @PostMapping("/read/{identifier}")
    public ResponseEntity<Void> markPageAsRead(@PathVariable String identifier) {
        pageService.markPageAsRead(identifier);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/read/{identifier}")
    public ResponseEntity<Boolean> hasUserReadPage(@PathVariable String identifier) {
        boolean hasRead = pageService.hasUserReadPage(identifier);
        return ResponseEntity.ok(hasRead);
    }

    @GetMapping("/read")
    public ResponseEntity<List<String>> getReadPages() {
        List<String> readPages = pageService.getReadPages();
        return ResponseEntity.ok(readPages);
    }
}
