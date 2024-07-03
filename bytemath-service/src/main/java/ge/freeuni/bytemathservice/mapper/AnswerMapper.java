package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.AnswerDTO;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerMapper {

    public List<AnswerDTO> entitiesToDtos(List<Answer> answers) {
        return answers.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

    private AnswerDTO entityToDto(Answer answer) {
        return AnswerDTO.builder()
                .id(answer.getId())
                .answerText(answer.getAnswerText())
                .build();
    }
}
