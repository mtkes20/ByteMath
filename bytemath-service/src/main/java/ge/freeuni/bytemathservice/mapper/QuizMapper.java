package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizMapper {

    private final QuestionMapper questionMapper;

    public QuizDTO entityToDto(Quiz quiz) {
        return QuizDTO.builder()
                .id(quiz.getId())
                .title(quiz.getTitle())
                .questions(questionMapper.entitiesToDtos(quiz.getQuestions()))
                .build();
    }
}
