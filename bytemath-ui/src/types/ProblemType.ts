export type ProblemType = {
    id: string;
    functionNameForPython: string;
    functionNameForJava: string;
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
};

export type TestCaseType = {
    input: any;
    expectedOutput: any;
};
