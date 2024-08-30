import {Grid, MenuItem} from "@mui/material";
import {StyledButton, StyledText, StyledTextField, SubContent, Subtitle} from "../styles/StyledComponents";
import Editor, {Monaco, OnMount} from "@monaco-editor/react";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import axios from "axios";
import {ProblemType} from "../../types/ProblemType";
import {useTranslation} from "react-i18next";
import {Moon, Sun} from "lucide-react";

type ProgrammingLanguage = 'python' | 'java';


const CodeEditor = ({problem}: { problem: ProblemType }) => {
    const {t} = useTranslation();

    const [language, setLanguage] = useState<ProgrammingLanguage>('python');
    const [code, setCode] = useState<string>(problem.pythonTemplate);
    const [output, setOutput] = useState<string>('');
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const editorRef = useRef<any>(null);
    const monacoRef = useRef<Monaco | null>(null);

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newLanguage = event.target.value as ProgrammingLanguage;
        setLanguage(newLanguage);
        setCode(newLanguage === 'python' ? problem.pythonTemplate : problem.javaTemplate);
    };

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
        }
    };

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;

        const model = editor.getModel();
        if (model) {
            const updateLockedRange = () => {
                const totalLines = model.getLineCount();
                const lockedLines = problem.lockedLines[language];
                const startLine = Math.max(1, totalLines - lockedLines + 1);
                const endLine = totalLines;

                if (startLine <= endLine) {
                    const lockedRanges = [
                        new monaco.Range(startLine, 1, endLine, model.getLineMaxColumn(endLine))
                    ];

                    editor.deltaDecorations([], lockedRanges.map(range => ({
                        range,
                        options: {
                            inlineClassName: 'readOnlyLine',
                            isWholeLine: true,
                            stickiness: monaco.editor.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges
                        }
                    })));
                }
            };

            updateLockedRange();

            model.onDidChangeContent(updateLockedRange);

            editor.onKeyDown((e: any) => {
                const position = editor.getPosition();
                if (position) {
                    const totalLines = model.getLineCount();
                    const lockedLines = problem.lockedLines[language];
                    if (position.lineNumber > totalLines - lockedLines) {
                        if (e.keyCode !== monaco.KeyCode.Escape) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                }
            });
        }
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput(`${t('problems.codeAndTestsRunning')}
`);

        try {
            for (let i = 0; i < problem.testCases.length; i++) {
                const testCase = problem.testCases[i];

                const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
                    language: language === 'python' ? 'python' : 'java',
                    version: language === 'python' ? '3.10.0' : '15.0.2',
                    files: [{content: code}],
                    stdin: testCase.input.toString()
                });

                const testOutput = response.data.run.output.trim().split('\n').pop() || '';
                const passed = testOutput === testCase.expectedOutput.toString();

                setOutput(prevOutput => `${prevOutput + t('problems.testCase')} ${i + 1}: ${passed ? t('problems.testCaseSuccessful') : t('problems.testCaseFailed')}\n`);
                if (!passed) {
                    setOutput(prevOutput => `${prevOutput + t('problems.expectedResult')}: ${testCase.expectedOutput}, ${t('problems.gotResult')}: ${testOutput}\n`);
                }
            }
        } catch (error) {
            setOutput(`Error: ${error}`);
        } finally {
            setIsRunning(false);
        }
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .readOnlyLine {
                opacity: 0.7;
                background: #F0F0F0;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .readOnlyLine {
                opacity: 0.7;
                background: ${isDarkTheme ? '#2D2D2D' : '#F0F0F0'};
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    return (
        <Grid item xs={12} md={6}>
            <SubContent>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <Subtitle>{t('problems.language')}</Subtitle>
                        <StyledTextField
                            style={{
                                width: "300px"
                            }}
                            select
                            value={language}
                            onChange={handleLanguageChange}
                            variant="outlined"
                        >
                            <MenuItem value="python">Python</MenuItem>
                            <MenuItem value="java">Java</MenuItem>
                        </StyledTextField>
                    </div>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '50%',
                            transition: 'background-color 0.5s',
                        }}
                    >
                        {isDarkTheme ? (
                            <Sun size={40} color="#FFD700"/>
                        ) : (
                            <Moon size={40} color="#6495ED"/>
                        )}
                    </button>
                </div>

                <Editor
                    key={`${language}-${isDarkTheme}`}
                    height="400px"
                    language={language}
                    value={code}
                    onChange={handleEditorChange}
                    onMount={handleEditorDidMount}
                    theme={isDarkTheme ? 'vs-dark' : 'light'}
                    options={{
                        minimap: {enabled: false},
                        scrollBeyondLastLine: false,
                        readOnly: false,
                        lineNumbers: (lineNumber: number) => {
                            const model = editorRef.current?.getModel();
                            if (model) {
                                const totalLines = model.getLineCount();
                                const lockedLines = problem.lockedLines[language];
                                if (lineNumber > totalLines - lockedLines) {
                                    return `🔒${lineNumber}`;
                                }
                            }
                            return lineNumber.toString();
                        }
                    }}
                />

                <StyledButton
                    onClick={handleRunCode}
                    disabled={isRunning}
                >
                    {isRunning ? t('problems.running') : t('problems.runCode')}
                </StyledButton>

                <Subtitle>{t('problems.output')}</Subtitle>
                <StyledText style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>
                    {output}
                </StyledText>
            </SubContent>
        </Grid>
    )
}

export default CodeEditor
