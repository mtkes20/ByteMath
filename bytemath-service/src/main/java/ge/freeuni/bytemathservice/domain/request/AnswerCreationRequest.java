package ge.freeuni.bytemathservice.domain.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnswerCreationRequest {

    private String answerTextEng;

    private String answerTextGeo;

    private boolean isCorrect;
}
