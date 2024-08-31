import React, {useEffect, useState} from 'react';
import {Box, Button, createTheme, Paper, ThemeProvider, Typography} from '@mui/material';
import {keyframes, styled} from '@mui/system';
import {useTranslation} from 'react-i18next';

const theme = createTheme({
    palette: {
        primary: {
            main: '#66bb6a',
        },
        secondary: {
            main: '#ef5350',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
        },
    },
    typography: {
        h4: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            color: '#ffffff',
        },
        h5: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            color: '#66bb6a',
        },
        h6: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            color: '#bbbbbb',
        },
        body1: {
            fontFamily: 'Roboto',
            color: '#ffffff',
        },
    },
});

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const GameContainer = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    margin: 'auto',
    width: '80%',
    maxWidth: '600px',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.background.paper,
    animation: `${fadeIn} 0.5s ease-out`,
}));

const ExpressionBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontFamily: 'monospace',
    fontSize: '1.75rem',
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
}));

const ButtonGroup = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(3),
}));

const GameButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(1, 4),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    borderRadius: theme.spacing(2),
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&.MuiButton-containedSecondary': {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}));
const GameComponent: React.FC<{
    generateQuestion: () => void,
    operators: string[],
    operatorLabels: { [key: string]: string },
    theme: any,
    currentExpression: string,
    correctAnswer: boolean,
    setCorrectAnswer: (value: boolean) => void
}> = ({generateQuestion, operators, operatorLabels, theme, currentExpression, correctAnswer, setCorrectAnswer}) => {
    const {t} = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft]);

    useEffect(() => {
        if (isPlaying) {
            generateQuestion();
        }
    }, [isPlaying, score]);

    const handleAnswer = (userAnswer: boolean) => {
        if (userAnswer === correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
        generateQuestion();
    };

    const startGame = () => {
        setIsPlaying(true);
        setTimeLeft(30);
        setScore(0);
        generateQuestion();
    };

    return (
        <ThemeProvider theme={theme}>
            <GameContainer>
                <Typography variant="h4" component="h1" align="center">
                    {t('logicalOperands.basicOperators.logicalOperatorGame.title')}
                </Typography>
                {isPlaying ? (
                    <>
                        <Typography variant="h6" align="center">
                            {t('logicalOperands.basicOperators.logicalOperatorGame.time')}: {timeLeft}
                        </Typography>
                        <Typography variant="h6" align="center">
                            {t('logicalOperands.basicOperators.logicalOperatorGame.score')}: {score}
                        </Typography>
                        <ExpressionBox>{currentExpression}</ExpressionBox>
                        <ButtonGroup>
                            <GameButton
                                variant="contained"
                                color="primary"
                                onClick={() => handleAnswer(true)}
                            >
                                {t('logicalOperands.basicOperators.logicalOperatorGame.true')}
                            </GameButton>
                            <GameButton
                                variant="contained"
                                color="secondary"
                                onClick={() => handleAnswer(false)}
                            >
                                {t('logicalOperands.basicOperators.logicalOperatorGame.false')}
                            </GameButton>
                        </ButtonGroup>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" align="center">
                            {timeLeft === 0 ? t('logicalOperands.basicOperators.logicalOperatorGame.gameOver') : t('logicalOperands.basicOperators.logicalOperatorGame.introduction')}
                        </Typography>
                        <Typography variant="h6" align="center">
                            {t('logicalOperands.basicOperators.logicalOperatorGame.finalScore')}: {score}
                        </Typography>
                        <ButtonGroup>
                            <GameButton
                                variant="contained"
                                color="primary"
                                onClick={startGame}
                            >
                                {timeLeft === 0 ? t('logicalOperands.basicOperators.logicalOperatorGame.playAgain') : t('logicalOperands.basicOperators.logicalOperatorGame.startGame')}
                            </GameButton>
                        </ButtonGroup>
                    </>
                )}
            </GameContainer>
        </ThemeProvider>
    );
};

export const AdvancedLogicalOperatorGame: React.FC = () => {
    const {t} = useTranslation();
    const [currentExpression, setCurrentExpression] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const operators = ['NAND', 'NOR', 'XOR'];

    const generateQuestion = () => {
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const a = Math.random() < 0.5;
        const b = Math.random() < 0.5;
        let result: boolean;
        let expression: string;
        const trueStr = t('logicalOperands.basicOperators.logicalOperatorGame.true');
        const falseStr = t('logicalOperands.basicOperators.logicalOperatorGame.false');
        const aStr = a ? trueStr : falseStr;
        const bStr = b ? trueStr : falseStr;

        switch (operator) {
            case 'NAND':
                result = !(a && b);
                expression = `${aStr} NAND ${bStr}`;
                break;
            case 'NOR':
                result = !(a || b);
                expression = `${aStr} NOR ${bStr}`;
                break;
            case 'XOR':
                result = a !== b;
                expression = `${aStr} XOR ${bStr}`;
                break;
            default:
                result = false;
                expression = '';
                break;
        }
        setCurrentExpression(expression);
        setCorrectAnswer(result);
    };

    const operatorLabels = {
        'NAND': 'NAND',
        'NOR': 'NOR',
        'XOR': 'XOR'
    };

    return <GameComponent
        generateQuestion={generateQuestion}
        operators={operators}
        operatorLabels={operatorLabels}
        theme={theme}
        currentExpression={currentExpression}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
    />;
};

export const BasicLogicalOperatorGame: React.FC = () => {
    const {t} = useTranslation();
    const [currentExpression, setCurrentExpression] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const operators = ['&&', '||', '!'];

    const generateQuestion = () => {
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const a = Math.random() < 0.5;
        const b = Math.random() < 0.5;
        let result: boolean;
        let expression: string;
        const trueStr = t('logicalOperands.basicOperators.logicalOperatorGame.true');
        const falseStr = t('logicalOperands.basicOperators.logicalOperatorGame.false');
        const aStr = a ? trueStr : falseStr;
        const bStr = b ? trueStr : falseStr;

        switch (operator) {
            case '&&':
                result = a && b;
                expression = `${aStr} && ${bStr}`;
                break;
            case '||':
                result = a || b;
                expression = `${aStr} || ${bStr}`;
                break;
            case '!':
                result = !a;
                expression = `! ${aStr}`;
                break;
            default:
                result = false;
                expression = '';
                break;
        }
        setCurrentExpression(expression);
        setCorrectAnswer(result);
    };

    const operatorLabels = {
        '&&': 'AND',
        '||': 'OR',
        '!': 'NOT'
    };

    return <GameComponent
        generateQuestion={generateQuestion}
        operators={operators}
        operatorLabels={operatorLabels}
        theme={theme}
        currentExpression={currentExpression}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
    />;
};
