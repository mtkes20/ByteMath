import React, {useState} from 'react';
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
            title: "AND (&&)",
            description: "Returns true (1) if both operands are true, otherwise false (0).",
            explanation: "The AND operator is used when you want to check if multiple conditions are all true. It's like checking if you have both your keys AND your wallet before leaving the house.",
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
            title: "OR (||)",
            description: "Returns true (1) if at least one operand is true, otherwise false (0).",
            explanation: "The OR operator is used when you want to check if at least one of multiple conditions is true. It's like deciding to go for a walk if it's either sunny OR you have an umbrella.",
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
            title: "NOT (!)",
            description: "Inverts the truth value of the operand.",
            explanation: "The NOT operator is used to reverse a boolean value. It's like a light switch: if the light is on, NOT will turn it off, and if it's off, NOT will turn it on.",
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
            <Title variant="h1">Basic Logical Operators</Title>
            <StyledText>
                Logical operators are fundamental to programming and boolean logic. They allow us to make complex
                decisions based on multiple conditions. Let's explore the three basic logical operators:
            </StyledText>

            {operators.map((op, index) => (
                <StyledCard key={index} elevation={2}>
                    <Title variant="h2">{op.title}</Title>
                    <StyledText>{op.description}</StyledText>
                    <StyledExplanation>{op.explanation}</StyledExplanation>
                    <StyledInteractionPrompt>Try it out: Click the bits below to toggle between 0 (false) and 1
                        (true)</StyledInteractionPrompt>
                    {op.calculator}
                </StyledCard>
            ))}
        </CoursePageMainContainer>
    );
}

export default BasicOperators;
