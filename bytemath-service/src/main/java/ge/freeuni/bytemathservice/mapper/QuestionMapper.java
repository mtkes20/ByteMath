package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.QuestionDTO;
import ge.freeuni.bytemathservice.domain.entity.Question;
import ge.freeuni.bytemathservice.domain.enums.QuestionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionMapper {

    private final AnswerMapper answerMapper;

    public List<QuestionDTO> entitiesToDtos(List<Question> questions, String language) {
        return questions.stream()
                .map((Question question) -> entityToDto(question, language))
                .collect(Collectors.toList());
    }

    private QuestionDTO entityToDto(Question question, String language) {
        return QuestionDTO.builder()
                .id(question.getId())
                .questionType(question.getQuestionType())
                .questionText(language.equals("ENG") ? question.getQuestionTextEng() : question.getQuestionTextGeo())
                .answers(question.getQuestionType() == QuestionType.SINGLE_CHOICE ? answerMapper.entitiesToDtos(question.getAnswers(), language) : null)
                .build();
    }
}
