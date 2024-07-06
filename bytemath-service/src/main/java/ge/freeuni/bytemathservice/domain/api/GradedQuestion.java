package ge.freeuni.bytemathservice.domain.api;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GradedQuestion {

    private Long questionId;
    private boolean correct;
    private String correctAnswer;
    private String userAnswer;
}
