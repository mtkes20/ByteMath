export type GradedQuiz = {
    correctAnswers: number;
    totalQuestions: string;
    results: GradedQuestion[];
}

export type GradedQuestion = {
    questionId: number;
    correct: boolean;
    correctAnswer: string;
    userAnswer: string;
}