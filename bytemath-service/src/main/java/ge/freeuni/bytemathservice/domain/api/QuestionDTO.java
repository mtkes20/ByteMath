package ge.freeuni.bytemathservice.domain.api;

import ge.freeuni.bytemathservice.domain.enums.QuestionType;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class QuestionDTO {

    private Long id;

    private String questionText;

    private List<AnswerDTO> answers;

    private QuestionType questionType;

}
