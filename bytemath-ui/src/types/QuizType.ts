import {GradedQuiz} from "./GradedQuiz";

export type QuizResponse = {
    graded: boolean;
    quiz: QuizType;
    gradedQuiz?: GradedQuiz;
}

export type QuizType = {
    id: number;
    title: string;
    questions: Question[];
}

export type Question = {
    id: number;
    questionText: string;
    questionType: QuestionType;
    answers?: Answer[]
}

export type Answer = {
    id: number;
    answerText: string;
}

export enum QuestionType {
    SINGLE_CHOICE = "SINGLE_CHOICE",
    TEXT = "TEXT"
}