package ge.freeuni.bytemathservice.domain.api;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class GradedQuiz {

    private int correctAnswers;
    private int totalQuestions;
    private List<GradedQuestion> results;
}
