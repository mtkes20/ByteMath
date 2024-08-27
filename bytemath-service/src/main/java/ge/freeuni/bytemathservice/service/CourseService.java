package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Course;
import ge.freeuni.bytemathservice.domain.entity.Page;
import ge.freeuni.bytemathservice.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CourseService {

    private final BytemathUserService bytemathUserService;
    private final CourseRepository courseRepository;

    public CourseService(BytemathUserService bytemathUserService, CourseRepository courseRepository) {
        this.bytemathUserService = bytemathUserService;
        this.courseRepository = courseRepository;
    }

    public int getCourseProgress(String name) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Course course = courseRepository.findByName(name)
                .orElseThrow();

        Set<Page> pages = course.getPages();
        Set<Page> readPages = currentBytemathUser.getReadPages();

        int totalPageCount = pages.size();
        if (totalPageCount == 0) {
            return 100;
        }

        int readPageCount = 0;
        for (Page page : pages) {
            if (readPages.contains(page)) {
                readPageCount++;
            }
        }

        return (int) ((readPageCount / (double) totalPageCount) * 100);
    }
}
