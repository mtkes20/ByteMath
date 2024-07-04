export type QuizAnswers = {
    id: number;
    selectedAnswerIds: SelectedAnswer
}

export type SelectedAnswer = {
    [key: string]: string
}
