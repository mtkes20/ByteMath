package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.AnswerDTO;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerMapper {

    public List<AnswerDTO> entitiesToDtos(List<Answer> answers, String language) {
        return answers.stream()
                .map((Answer answer) -> entityToDto(answer, language))
                .collect(Collectors.toList());
    }

    private AnswerDTO entityToDto(Answer answer, String language) {
        return AnswerDTO.builder()
                .id(answer.getId())
                .answerText(language.equals("ENG") ? answer.getAnswerTextEng() : answer.getAnswerTextGeo())
                .build();
    }
}
