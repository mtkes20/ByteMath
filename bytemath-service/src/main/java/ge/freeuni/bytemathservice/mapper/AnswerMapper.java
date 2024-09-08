package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.AnswerDTO;
import ge.freeuni.bytemathservice.domain.entity.Answer;
import ge.freeuni.bytemathservice.domain.request.AnswerCreationRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerMapper {

    public List<AnswerDTO> entitiesToDtos(List<Answer> answers, String language) {
        return answers.stream()
                .map(answer -> entityToDto(answer, language))
                .collect(Collectors.toList());
    }

    private AnswerDTO entityToDto(Answer answer, String language) {
        return AnswerDTO.builder()
                .id(answer.getId())
                .answerText(language.equals("ENG") ? answer.getAnswerTextEng() : answer.getAnswerTextGeo())
                .build();
    }

    public List<Answer> requestToEntities(List<AnswerCreationRequest> requests) {
        return requests.stream()
                .map(this::requestToEntity)
                .collect(Collectors.toList());
    }

    private Answer requestToEntity(AnswerCreationRequest request) {
        Answer answer = new Answer();
        answer.setId(0L);
        answer.setAnswerTextEng(request.getAnswerTextEng());
        answer.setAnswerTextGeo(request.getAnswerTextGeo());
        return answer;
    }
}
