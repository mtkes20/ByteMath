package ge.freeuni.bytemathservice.domain.api;


import lombok.Data;

import java.util.List;

@Data
public class SubmittedQuiz {

    private Long id;
    private List<SubmittedAnswer> answers;
}
