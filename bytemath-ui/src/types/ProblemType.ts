export type ProblemType = {
    id: string;
    title: string;
    description: string;
    task: string;
    inputFormat: string;
    outputFormat: string;
    example: string;
    note?: string;
    pythonTemplate: string;
    javaTemplate: string;
    testCases: TestCaseType[];
    lockedLines: { python: number, java: number };
    difficulty: ProblemDifficulty;
    isCompleted: boolean;
};

export type TestCaseType = {
    input: any;
    expectedOutput: any;
};

export enum ProblemDifficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}

export type ProblemSummaryType = {
    id: number;
    title: string;
    difficulty: ProblemDifficulty;
}

export type ProblemCompletionStatsType = {
    easyCompleted: number;
    mediumCompleted: number;
    hardCompleted: number;
};
