package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.QuizDTO;
import ge.freeuni.bytemathservice.domain.entity.Quiz;
import ge.freeuni.bytemathservice.domain.request.QuizCreationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizMapper {

    private final QuestionMapper questionMapper;

    public QuizDTO entityToDto(Quiz quiz, String language) {
        return QuizDTO.builder()
                .id(quiz.getId())
                .identifier(quiz.getIdentifier())
                .title(language.equals("ENG") ? quiz.getTitleEng() : quiz.getTitleGeo())
                .questions(questionMapper.entitiesToDtos(quiz.getQuestions(), language))
                .build();
    }

    public Quiz requestToEntity(QuizCreationRequest request) {
        Quiz quiz = new Quiz();
        quiz.setId(0L);
        quiz.setIdentifier(request.getIdentifier());
        quiz.setTitleEng(request.getTitleEng());
        quiz.setTitleGeo(request.getTitleGeo());
        quiz.setQuestions(questionMapper.requestsToEntities(request.getQuestions()));
        return quiz;
    }
}
