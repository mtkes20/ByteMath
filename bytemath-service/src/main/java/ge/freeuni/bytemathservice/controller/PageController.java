package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.service.PageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pages")
public class PageController {

    private final PageService pageService;

    public PageController(PageService pageService) {
        this.pageService = pageService;
    }

    @PostMapping("/{pageId}/read")
    public ResponseEntity<Void> markPageAsRead(@PathVariable Long pageId) {
        pageService.markPageAsRead(pageId);
        return ResponseEntity.ok().build();
    }
}
