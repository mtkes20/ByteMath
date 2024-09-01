package ge.freeuni.bytemathservice.service.impl;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Course;
import ge.freeuni.bytemathservice.domain.entity.Page;
import ge.freeuni.bytemathservice.repository.CourseRepository;
import ge.freeuni.bytemathservice.service.BytemathUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ge.freeuni.bytemathservice.service.CourseService {

    private final BytemathUserService bytemathUserService;
    private final CourseRepository courseRepository;

    @Override
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
