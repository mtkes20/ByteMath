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
    lockedLines: { python: number, java: number }
    difficulty: ProblemDifficulty;
};

export type TestCaseType = {
    input: any;
    expectedOutput: any;
};

export enum ProblemDifficulty {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard"
}

export type ProblemSummaryType = {
    id: number;
    title: string;
}

export type ProblemCompletionStatsType = {
    easyCompleted: number;
    mediumCompleted: number;
    hardCompleted: number;
};
