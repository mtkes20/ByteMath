package ge.freeuni.bytemathservice.domain.api;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuizResponseWrapper {
    private boolean graded;
    private QuizDTO quiz;
    private GradedQuiz gradedQuiz;

    public QuizResponseWrapper(QuizDTO quiz) {
        this.graded = false;
        this.quiz = quiz;
    }
}
