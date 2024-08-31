import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    CoursePageMainContainer,
    Example,
    HeaderCell,
    ResultCell,
    StyledBit,
    StyledCalculatorResult,
    StyledCard,
    StyledInteractionPrompt,
    StyledOperatorCalculator,
    StyledOperatorCalculatorInput,
    StyledText,
    Subtitle,
    TableCell,
    TableHeader,
    TableRow,
    Title,
    TruthTable,
} from "../styles/StyledComponents";
import Quiz from "../quiz/Quiz";
import {AdvancedLogicalOperatorGame} from "./GameComponent";


interface OperatorInfo {
    title: string;
    symbol: string;
    description: string;
    explanation: string;
    calculator: (inputs: boolean[], setInputs: React.Dispatch<React.SetStateAction<boolean[]>>, calculate: () => boolean) => React.ReactNode;
    truthTable: OperatorRow[];
}

interface BinaryOperatorRow {
    A: boolean;
    B: boolean;
    result: boolean;
}

type OperatorRow = BinaryOperatorRow;

const AdvancedOperators: React.FC = () => {
    const {t} = useTranslation();
    const [inputs, setInputs] = useState<{ [key: string]: boolean[] }>({
        nand: [false, false],
        nor: [false, false],
        xor: [false, false],
    });

    const toggleBit = (operatorKey: string, index: number) => {
        setInputs(prev => ({
            ...prev,
            [operatorKey]: prev[operatorKey].map((bit, i) => i === index ? !bit : bit)
        }));
    };

    const createCalculator = (operatorKey: string, symbol: string, calculate: (inputs: boolean[]) => boolean) => {
        const operatorInputs = inputs[operatorKey];
        return (
            <StyledOperatorCalculator>
                <StyledOperatorCalculatorInput>
                    {operatorInputs.map((input, index) => (
                        <StyledBit
                            key={index}
                            onClick={() => toggleBit(operatorKey, index)}
                            isOn={input}
                        >
                            {input ? 1 : 0}
                        </StyledBit>
                    ))}
                </StyledOperatorCalculatorInput>
                <StyledCalculatorResult>
                    {`${operatorInputs.map(input => input ? '1' : '0').join(` ${symbol} `)} = ${calculate(operatorInputs) ? '1' : '0'}`}
                </StyledCalculatorResult>
            </StyledOperatorCalculator>
        );
    };

    const operators: OperatorInfo[] = [
        {
            title: t('logicalOperands.advancedOperators.nand.title'),
            symbol: t('logicalOperands.advancedOperators.nand.symbol'),
            description: t('logicalOperands.advancedOperators.nand.description'),
            explanation: t('logicalOperands.advancedOperators.nand.explanation'),
            calculator: () => createCalculator('nand', 'NAND', (inputs) => !(inputs[0] && inputs[1])),
            truthTable: [
                {A: false, B: false, result: true},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: false},
            ]
        },
        {
            title: t('logicalOperands.advancedOperators.nor.title'),
            symbol: t('logicalOperands.advancedOperators.nor.symbol'),
            description: t('logicalOperands.advancedOperators.nor.description'),
            explanation: t('logicalOperands.advancedOperators.nor.explanation'),
            calculator: () => createCalculator('nor', 'NOR', (inputs) => !(inputs[0] || inputs[1])),
            truthTable: [
                {A: false, B: false, result: true},
                {A: false, B: true, result: false},
                {A: true, B: false, result: false},
                {A: true, B: true, result: false},
            ]
        },
        {
            title: t('logicalOperands.advancedOperators.xor.title'),
            symbol: t('logicalOperands.advancedOperators.xor.symbol'),
            description: t('logicalOperands.advancedOperators.xor.description'),
            explanation: t('logicalOperands.advancedOperators.xor.explanation'),
            calculator: () => createCalculator('xor', 'XOR', (inputs) => inputs[0] !== inputs[1]),
            truthTable: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: false},
            ]
        }
    ];

    return (
        <CoursePageMainContainer>
            <Title>{t('logicalOperands.advancedOperators.title')}</Title>
            <StyledText>
                {t('logicalOperands.advancedOperators.introduction')}
            </StyledText>

            {operators.map((op, index) => (
                <StyledCard key={index} elevation={2}>
                    <Subtitle style={{marginBottom: "10px"}}>{op.title} ({op.symbol})</Subtitle>
                    <StyledText>{op.description}</StyledText>
                    <Example>{op.explanation}</Example>
                    <StyledInteractionPrompt>{t('logicalOperands.advancedOperators.interactionPrompt')}</StyledInteractionPrompt>
                    {op.calculator([], () => {
                    }, () => false)}
                    <Subtitle
                        style={{marginTop: "20px"}}>{t('logicalOperands.advancedOperators.truthTables.title')}</Subtitle>
                    <TruthTable>
                        <thead>
                        <TableHeader>
                            <HeaderCell>{t('logicalOperands.advancedOperators.truthTables.tableHeaderA')}</HeaderCell>
                            <HeaderCell>{t('logicalOperands.advancedOperators.truthTables.tableHeaderB')}</HeaderCell>
                            <HeaderCell>{t('logicalOperands.advancedOperators.truthTables.tableHeaderResult')}</HeaderCell>
                        </TableHeader>
                        </thead>
                        <tbody>
                        {op.truthTable.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.A ? 1 : 0}</TableCell>
                                <TableCell>{row.B ? 1 : 0}</TableCell>
                                <ResultCell isTrue={row.result}>{row.result ? 1 : 0}</ResultCell>
                            </TableRow>
                        ))}
                        </tbody>
                    </TruthTable>
                </StyledCard>
            ))}
            <AdvancedLogicalOperatorGame/>
            <Quiz identifier="LOGICAL_OPERANDS_ADVANCED_OPERATORS"/>
        </CoursePageMainContainer>
    );
};

export default AdvancedOperators;
