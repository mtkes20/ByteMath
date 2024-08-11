package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Page;
import ge.freeuni.bytemathservice.repository.PageRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class PageService {

    private final PageRepository pageRepository;
    private final BytemathUserService bytemathUserService;

    public PageService(PageRepository pageRepository, BytemathUserService bytemathUserService) {
        this.pageRepository = pageRepository;
        this.bytemathUserService = bytemathUserService;
    }

    @Transactional
    public void markPageAsRead(Long pageId) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Page page = pageRepository.findById(pageId)
                .orElseThrow();

        page.markAsReadBy(currentBytemathUser);
        pageRepository.save(page);
    }
}
