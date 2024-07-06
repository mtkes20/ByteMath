package ge.freeuni.bytemathservice.domain.api;


import lombok.Data;

import java.util.List;

@Data
public class SubmittedQuiz {

    private Long quizId;
    private List<SubmittedAnswer> answers;
}
