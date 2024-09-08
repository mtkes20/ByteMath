package ge.freeuni.bytemathservice.service.impl;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.domain.request.QuizCreationRequest;
import ge.freeuni.bytemathservice.mapper.QuizMapper;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements ge.freeuni.bytemathservice.service.QuizService {

    private final QuizRepository quizRepository;

    private final QuizMapper quizMapper;


    @Override
    @Transactional
    public QuizDTO createQuiz(QuizCreationRequest newQuiz) {
        Quiz quizEntity = quizMapper.requestToEntity(newQuiz);
        Quiz savedQuiz = quizRepository.save(quizEntity);
        return quizMapper.entityToDto(savedQuiz, "ENG");
    }

    @Override
    public QuizDTO getQuizByIdentifier(String identifier, String language) {
        Quiz quiz = quizRepository.findByIdentifier(identifier).orElseThrow(RuntimeException::new);
        return quizMapper.entityToDto(quiz, language);
    }
}
