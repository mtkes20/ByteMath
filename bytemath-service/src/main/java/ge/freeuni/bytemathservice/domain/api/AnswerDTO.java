package ge.freeuni.bytemathservice.domain.api;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AnswerDTO {

    private Long id;

    private String answerText;
}
