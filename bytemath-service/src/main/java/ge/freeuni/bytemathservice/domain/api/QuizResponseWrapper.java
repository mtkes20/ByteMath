package ge.freeuni.bytemathservice.domain.api;

import lombok.Data;

@Data
public class QuizResponseWrapper {
    private boolean graded;
    private QuizDTO quiz;
    private GradedQuiz gradedQuiz;

    public QuizResponseWrapper(QuizDTO quiz) {
        this.graded = false;
        this.quiz = quiz;
    }

    public QuizResponseWrapper(GradedQuiz gradedQuiz) {
        this.graded = true;
        this.gradedQuiz = gradedQuiz;
    }
}
