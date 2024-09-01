package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.mapper.QuizMapper;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizRepository quizRepository;

    private final QuizMapper quizMapper;

    public QuizDTO getQuizByIdentifier(String identifier, String language) {
        Quiz quiz = quizRepository.findByIdentifier(identifier).orElseThrow(RuntimeException::new);
        return quizMapper.entityToDto(quiz, language);
    }
}
