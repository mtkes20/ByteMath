export type TakeQuiz = {
    id: number;
    title: string;
    questions: TakeQuizQuestion[];
}

export type TakeQuizQuestion = {
    id: number;
    questionText: string;
    questionType: QuestionType;
    possibleAnswers?: TakePossibleAnswer[]
}

export type TakePossibleAnswer = {
    id: number;
    answerText: string;
}

export enum QuestionType {
    SINGLE_CHOICE = "SINGLE_CHOICE",
    TEXT = "TEXT"
}