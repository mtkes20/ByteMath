package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.GradedQuestion;
import ge.freeuni.bytemathservice.domain.api.GradedQuiz;
import ge.freeuni.bytemathservice.domain.api.SubmittedAnswer;
import ge.freeuni.bytemathservice.domain.api.SubmittedQuiz;
import ge.freeuni.bytemathservice.domain.entity.Question;

public interface GradeQuizService {

    GradedQuiz gradeQuiz(String quizIdentifier, String language, SubmittedQuiz request);

    GradedQuestion createUnansweredGradedQuestion(Question question, String language);

    String getCorrectAnswerText(Question question, String language);

    GradedQuestion gradeQuestion(SubmittedAnswer submittedAnswer, Question question, String language);
}
