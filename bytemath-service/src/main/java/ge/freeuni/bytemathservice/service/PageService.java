package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Page;
import ge.freeuni.bytemathservice.repository.PageRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PageService {

    private final PageRepository pageRepository;
    private final BytemathUserService bytemathUserService;

    public PageService(PageRepository pageRepository, BytemathUserService bytemathUserService) {
        this.pageRepository = pageRepository;
        this.bytemathUserService = bytemathUserService;
    }

    @Transactional
    public void markPageAsRead(String identifier) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Page page = pageRepository.findByIdentifier(identifier)
                .orElseThrow();
        page.markAsReadBy(currentBytemathUser);
        pageRepository.save(page);
    }

    public boolean hasUserReadPage(String identifier) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Page page = pageRepository.findByIdentifier(identifier)
                .orElseThrow();
        return currentBytemathUser.getReadPages().contains(page);
    }

    public List<String> getReadPages() {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        return currentBytemathUser.getReadPages().stream()
                .map(Page::getIdentifier)
                .collect(Collectors.toList());
    }
}
