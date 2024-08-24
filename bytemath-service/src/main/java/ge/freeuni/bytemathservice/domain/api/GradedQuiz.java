package ge.freeuni.bytemathservice.domain.api;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GradedQuiz {

    private int correctAnswers;
    private int totalQuestions;
    private List<GradedQuestion> results;
}
