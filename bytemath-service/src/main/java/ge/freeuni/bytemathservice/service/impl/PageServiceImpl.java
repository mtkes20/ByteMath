package ge.freeuni.bytemathservice.service.impl;

import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Page;
import ge.freeuni.bytemathservice.repository.PageRepository;
import ge.freeuni.bytemathservice.service.BytemathUserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PageServiceImpl implements ge.freeuni.bytemathservice.service.PageService {

    private final PageRepository pageRepository;
    private final BytemathUserService bytemathUserService;


    @Transactional
    @Override
    public void markPageAsRead(String identifier) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Page page = pageRepository.findByIdentifier(identifier)
                .orElseThrow();
        page.markAsReadBy(currentBytemathUser);
        pageRepository.save(page);
    }

    @Override
    public boolean hasUserReadPage(String identifier) {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        Page page = pageRepository.findByIdentifier(identifier)
                .orElseThrow();
        return currentBytemathUser.getReadPages().contains(page);
    }

    @Override
    public List<String> getReadPages() {
        BytemathUser currentBytemathUser = bytemathUserService.getCurrentUser();
        return currentBytemathUser.getReadPages().stream()
                .map(Page::getIdentifier)
                .collect(Collectors.toList());
    }
}
