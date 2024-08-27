import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    CoursePageMainContainer,
    StyledBit,
    StyledCalculatorResult,
    StyledCard,
    StyledExplanation,
    StyledInteractionPrompt,
    StyledOperatorCalculator,
    StyledOperatorCalculatorInput,
    StyledText,
    Title
} from "../styles/StyledComponents";

interface OperatorInfo {
    title: string;
    description: string;
    explanation: string;
    calculator: React.ReactNode;
}

const BasicOperators: React.FC = () => {
    const { t } = useTranslation();

    const [andInputs, setAndInputs] = useState<boolean[]>([false, false]);
    const [orInputs, setOrInputs] = useState<boolean[]>([false, false]);
    const [notInput, setNotInput] = useState<boolean>(false);

    const toggleBit = (inputs: boolean[], setInputs: React.Dispatch<React.SetStateAction<boolean[]>>, index: number) => {
        const newInputs = [...inputs];
        newInputs[index] = !newInputs[index];
        setInputs(newInputs);
    };

    const calculateAnd = (): boolean => andInputs[0] && andInputs[1];
    const calculateOr = (): boolean => orInputs[0] || orInputs[1];
    const calculateNot = (): boolean => !notInput;

    const operators: OperatorInfo[] = [
        {
            title: t('logicalOperands.basicOperators.and.title'),
            description: t('logicalOperands.basicOperators.and.description'),
            explanation: t('logicalOperands.basicOperators.and.explanation'),
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        {andInputs.map((input, index) => (
                            <StyledBit
                                key={index}
                                onClick={() => toggleBit(andInputs, setAndInputs, index)}
                                isOn={input}
                            >
                                {input ? 1 : 0}
                            </StyledBit>
                        ))}
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateAnd() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        },
        {
            title: t('logicalOperands.basicOperators.or.title'),
            description: t('logicalOperands.basicOperators.or.description'),
            explanation: t('logicalOperands.basicOperators.or.explanation'),
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        {orInputs.map((input, index) => (
                            <StyledBit
                                key={index}
                                onClick={() => toggleBit(orInputs, setOrInputs, index)}
                                isOn={input}
                            >
                                {input ? 1 : 0}
                            </StyledBit>
                        ))}
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateOr() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        },
        {
            title: t('logicalOperands.basicOperators.not.title'),
            description: t('logicalOperands.basicOperators.not.description'),
            explanation: t('logicalOperands.basicOperators.not.explanation'),
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        <StyledBit
                            onClick={() => setNotInput(!notInput)}
                            isOn={notInput}
                        >
                            {notInput ? 1 : 0}
                        </StyledBit>
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateNot() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        }
    ];

    return (
        <CoursePageMainContainer>
            <Title variant="h1">{t('logicalOperands.basicOperators.title')}</Title>
            <StyledText>
                {t('logicalOperands.basicOperators.introduction')}
            </StyledText>

            {operators.map((op, index) => (
                <StyledCard key={index} elevation={2}>
                    <Title variant="h2">{op.title}</Title>
                    <StyledText>{op.description}</StyledText>
                    <StyledExplanation>{op.explanation}</StyledExplanation>
                    <StyledInteractionPrompt>{t('logicalOperands.basicOperators.interactionPrompt')}</StyledInteractionPrompt>
                    {op.calculator}
                </StyledCard>
            ))}
        </CoursePageMainContainer>
    );
}

export default BasicOperators;
