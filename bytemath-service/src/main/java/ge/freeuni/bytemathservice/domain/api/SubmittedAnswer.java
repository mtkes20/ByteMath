package ge.freeuni.bytemathservice.domain.api;

import lombok.Data;

@Data
public class SubmittedAnswer {

    private Long questionId;
    private Long selectedAnswerId;
    private String textAnswer;
}
