package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizMapper {

    private final QuestionMapper questionMapper;

    public QuizDTO entityToDto(Quiz quiz, String language) {
        return QuizDTO.builder()
                .id(quiz.getId())
                .title(language.equals("ENG") ? quiz.getTitleEng() : quiz.getTitleGeo())
                .questions(questionMapper.entitiesToDtos(quiz.getQuestions(), language))
                .build();
    }
}
