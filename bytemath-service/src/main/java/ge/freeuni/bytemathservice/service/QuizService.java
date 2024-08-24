package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import ge.freeuni.bytemathservice.domain.entity.Question;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.mapper.QuizMapper;
import ge.freeuni.bytemathservice.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizRepository quizRepository;

    private final QuizMapper quizMapper;

    public QuizDTO getQuizByIdentifier(String identifier, String language) {
        Quiz quiz = quizRepository.findByIdentifierAndLanguage(identifier, language).orElseThrow(RuntimeException::new);
        return quizMapper.entityToDto(quiz);
    }

    public String getCorrectAnswer(Long questionId) {
        Optional<Quiz> quizOpt = quizRepository.findByQuestionsId(questionId);
        if (quizOpt.isPresent()) {
            Quiz quiz = quizOpt.get();
            Optional<Question> questionOpt = quiz.getQuestions().stream()
                    .filter(q -> q.getId().equals(questionId))
                    .findFirst();
            if (questionOpt.isPresent()) {
                Question question = questionOpt.get();
                Optional<Answer> correctAnswerOpt = question.getAnswers().stream()
                        .filter(Answer::getIsCorrect)
                        .findFirst();
                if (correctAnswerOpt.isPresent()) {
                    return correctAnswerOpt.get().getAnswerText();
                } else {
                    throw new RuntimeException();
                }
            } else {
                throw new RuntimeException();
            }
        } else {
            throw new RuntimeException();
        }
    }
}
