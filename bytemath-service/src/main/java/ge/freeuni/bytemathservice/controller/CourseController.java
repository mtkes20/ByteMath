package ge.freeuni.bytemathservice.controller;

import ge.freeuni.bytemathservice.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping("progress/{name}")
    public ResponseEntity<Integer> getCourseProgress(@PathVariable String name) {
        int progress = courseService.getCourseProgress(name);
        return ResponseEntity.ok(progress);
    }

}
