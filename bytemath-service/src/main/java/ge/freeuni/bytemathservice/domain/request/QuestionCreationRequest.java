package ge.freeuni.bytemathservice.domain.request;

import ge.freeuni.bytemathservice.domain.enums.QuestionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuestionCreationRequest {

    private String questionTextEng;

    private String questionTextGeo;

    private QuestionType questionType;

    private List<AnswerCreationRequest> answers;
}
