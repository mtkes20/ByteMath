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

const AdvancedOperators: React.FC = () => {
    const [xorInputs, setXorInputs] = useState<boolean[]>([false, false]);
    const [nandInputs, setNandInputs] = useState<boolean[]>([false, false]);
    const [norInputs, setNorInputs] = useState<boolean[]>([false, false]);

    const toggleBit = (inputs: boolean[], setInputs: React.Dispatch<React.SetStateAction<boolean[]>>, index: number) => {
        const newInputs = [...inputs];
        newInputs[index] = !newInputs[index];
        setInputs(newInputs);
    };

    const calculateXor = (): boolean => xorInputs[0] !== xorInputs[1];
    const calculateNand = (): boolean => !(nandInputs[0] && nandInputs[1]);
    const calculateNor = (): boolean => !(norInputs[0] || norInputs[1]);

    const operators: OperatorInfo[] = [
        {
            title: "XOR (^)",
            description: "Returns true if the operands are different, false if they are the same.",
            explanation: "XOR (Exclusive OR) is useful when you want to check if exactly one of two conditions is true, but not both.",
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        {xorInputs.map((input, index) => (
                            <StyledBit
                                key={index}
                                onClick={() => toggleBit(xorInputs, setXorInputs, index)}
                                isOn={input}
                            >
                                {input ? 1 : 0}
                            </StyledBit>
                        ))}
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateXor() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        },
        {
            title: "NAND",
            description: "Returns false only if both operands are true.",
            explanation: "NAND is the negation of AND. It's often used in digital circuit design as a universal gate.",
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        {nandInputs.map((input, index) => (
                            <StyledBit
                                key={index}
                                onClick={() => toggleBit(nandInputs, setNandInputs, index)}
                                isOn={input}
                            >
                                {input ? 1 : 0}
                            </StyledBit>
                        ))}
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateNand() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        },
        {
            title: "NOR",
            description: "Returns true only if both operands are false.",
            explanation: "NOR is the negation of OR. Like NAND, it's also used as a universal gate in digital circuits.",
            calculator: (
                <StyledOperatorCalculator>
                    <StyledOperatorCalculatorInput>
                        {norInputs.map((input, index) => (
                            <StyledBit
                                key={index}
                                onClick={() => toggleBit(norInputs, setNorInputs, index)}
                                isOn={input}
                            >
                                {input ? 1 : 0}
                            </StyledBit>
                        ))}
                    </StyledOperatorCalculatorInput>
                    <StyledCalculatorResult>Result: {calculateNor() ? 1 : 0}</StyledCalculatorResult>
                </StyledOperatorCalculator>
            )
        }
    ];

    return (
        <CoursePageMainContainer>
            <Title variant="h1">Advanced Logical Operators</Title>
            <StyledText>
                Advanced logical operators build upon the basic ones, offering more complex and powerful ways to
                manipulate logical conditions. These operators are invaluable in scenarios requiring complex condition
                checks,
                digital circuit design, and succinct conditional logic expressions.
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

export default AdvancedOperators;
