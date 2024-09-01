package ge.freeuni.bytemathservice.service;

import jakarta.transaction.Transactional;

import java.util.List;

public interface PageService {
    @Transactional
    void markPageAsRead(String identifier);

    boolean hasUserReadPage(String identifier);

    List<String> getReadPages();
}
