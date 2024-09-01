import React, {useState, useEffect} from 'react';
import {StyledCard, StyledText, Subtitle, StyledButton, StyledTextField, SubContent} from "../utils/StyledComponents";
import {Stack} from "@mui/material";
import {useTranslation} from "react-i18next";

const BinaryGameWidget = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameActive, setGameActive] = useState(false);
    const [isBinary, setIsBinary] = useState(false);
    const { t } = useTranslation()

    const generateQuestion = () => {
        const num = Math.floor(Math.random() * 256);
        const isBinary = Math.random() < 0.5;
        setQuestion(isBinary ? num.toString(2) : num.toString());
        setIsBinary(isBinary);
        return isBinary ? num : num.toString(2);
    };

    const startGame = () => {
        setGameActive(true);
        setScore(0);
        setTimeLeft(60);
        generateQuestion();
    };

    const checkAnswer = () => {
        let correct = false;
        if (!isBinary && !isNaN(parseInt(answer, 2)) && parseInt(answer, 2) === parseInt(question)) {
            correct = true;
        } else if (isBinary && !isNaN(parseInt(answer)) && parseInt(answer) === parseInt(question, 2)) {
            correct = true;
        }
        if (correct) {
            setScore(score + 1);
        }
        generateQuestion();
        setAnswer('');
    };

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (gameActive && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0) {
            setGameActive(false);
        }
        return () => clearTimeout(timer);
    }, [gameActive, timeLeft]);

    return (
        <StyledCard>
            <SubContent>
                <Subtitle>{t("binaryConversionGame")}</Subtitle>
                {!gameActive ? (
                    <StyledButton
                    style={{
                        width: "200px"
                    }}
                        onClick={startGame}>{t("startGame")}</StyledButton>
                ) : (
                    <SubContent>
                        <StyledText>{`${isBinary ? t("convertToDecimal") : t("convertToBinary")}: ${question}`}</StyledText>
                        <Stack display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                            <StyledTextField
                                size="small"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                            />
                            <StyledButton onClick={checkAnswer}>{t("submit")}</StyledButton>
                        </Stack>
                        <StyledText>{`${t("score")}: ${score}`}</StyledText>
                        <StyledText>{`${t("timeLeft")}: ${timeLeft}${t("secondsShort")}`}</StyledText>
                    </SubContent>
                )}
            </SubContent>
        </StyledCard>
    );
};

export default BinaryGameWidget;