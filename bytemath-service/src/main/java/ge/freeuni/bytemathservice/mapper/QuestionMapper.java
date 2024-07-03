package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.QuestionDTO;
import ge.freeuni.bytemathservice.domain.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionMapper {

    private final AnswerMapper answerMapper;

    public List<QuestionDTO> entitiesToDtos(List<Question> questions) {
        return questions.stream()
                        .map(this::entityToDto)
                        .collect(Collectors.toList());
    }

    private QuestionDTO entityToDto(Question question) {
        return QuestionDTO.builder()
                .id(question.getId())
                .questionType(question.getQuestionType())
                .questionText(question.getQuestionText())
                .answers(answerMapper.entitiesToDtos(question.getAnswers()))
                .build();
    }
}
