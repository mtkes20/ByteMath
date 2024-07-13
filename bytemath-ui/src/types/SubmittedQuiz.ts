export type SubmittedQuiz = {
    id: number;
    answers: SubmittedAnswer[]
}

export type SubmittedAnswer = {
    questionId: number;
    selectedAnswerId?: number;
    textAnswer?: string;
}
