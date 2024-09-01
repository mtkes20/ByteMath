package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;

public interface QuizService {
    QuizDTO getQuizByIdentifier(String identifier, String language);
}
