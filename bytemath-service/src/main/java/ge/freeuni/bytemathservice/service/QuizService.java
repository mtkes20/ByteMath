package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.request.QuizCreationRequest;

public interface QuizService {

    QuizDTO createQuiz(QuizCreationRequest newQuiz);

    QuizDTO getQuizByIdentifier(String identifier, String language);
}
