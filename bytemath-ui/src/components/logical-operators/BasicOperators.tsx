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
import {BasicLogicalOperatorGame} from "./GameComponent";


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

interface UnaryOperatorRow {
    A: boolean;
    result: boolean;
}

type OperatorRow = BinaryOperatorRow | UnaryOperatorRow;


const BasicOperators: React.FC = () => {
    const {t} = useTranslation();
    const [inputs, setInputs] = useState<{ [key: string]: boolean[] }>({
        and: [false, false],
        or: [false, false],
        not: [false],
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
                    {symbol === '!'
                        ? `! ${operatorInputs[0] ? '1' : '0'} = ${calculate(operatorInputs) ? '1' : '0'}`
                        : `${operatorInputs.map(input => input ? '1' : '0').join(` ${symbol} `)} = ${calculate(operatorInputs) ? '1' : '0'}`}
                </StyledCalculatorResult>

            </StyledOperatorCalculator>
        );
    };

    const operators: OperatorInfo[] = [
        {
            title: t('logicalOperands.basicOperators.and.title'),
            symbol: t('logicalOperands.basicOperators.and.symbol'),
            description: t('logicalOperands.basicOperators.and.description'),
            explanation: t('logicalOperands.basicOperators.and.explanation'),
            calculator: () => createCalculator('and', '&&', (inputs) => inputs[0] && inputs[1]),
            truthTable: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: false},
                {A: true, B: false, result: false},
                {A: true, B: true, result: true},
            ]
        },
        {
            title: t('logicalOperands.basicOperators.or.title'),
            symbol: t('logicalOperands.basicOperators.or.symbol'),
            description: t('logicalOperands.basicOperators.or.description'),
            explanation: t('logicalOperands.basicOperators.or.explanation'),
            calculator: () => createCalculator('or', '||', (inputs) => inputs[0] || inputs[1]),
            truthTable: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: true},
            ]
        },
        {
            title: t('logicalOperands.basicOperators.not.title'),
            symbol: t('logicalOperands.basicOperators.not.symbol'),
            description: t('logicalOperands.basicOperators.not.description'),
            explanation: t('logicalOperands.basicOperators.not.explanation'),
            calculator: () => createCalculator('not', '!', (inputs) => !inputs[0]),
            truthTable: [
                {A: false, result: true},
                {A: true, result: false},
            ]
        },
        {
            title: t('logicalOperands.basicOperators.xor.title'),
            symbol: t('logicalOperands.basicOperators.xor.symbol'),
            description: t('logicalOperands.basicOperators.xor.description'),
            explanation: t('logicalOperands.basicOperators.xor.explanation'),
            calculator: () => createCalculator('xor', '⊕', (inputs) => inputs[0] !== inputs[1]),
            truthTable: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: false},
            ]
        }
    ];

    const isBinaryOperator = (table: OperatorRow[]): table is (OperatorRow & { B: boolean })[] => {
        return 'B' in table[0];
    };

    return (
        <CoursePageMainContainer>
            <Title>{t('logicalOperands.basicOperators.title')}</Title>
            <StyledText>
                {t('logicalOperands.basicOperators.introduction')}
            </StyledText>

            {operators.map((op, index) => (
                <StyledCard key={index} elevation={2}>
                    <Subtitle style={{marginBottom: "10px"}}>{op.title} ({op.symbol})</Subtitle>
                    <StyledText>{op.description}</StyledText>
                    <Example>{op.explanation}</Example>
                    <StyledInteractionPrompt>{t('logicalOperands.basicOperators.interactionPrompt')}</StyledInteractionPrompt>
                    {op.calculator([], () => {
                    }, () => false)}
                    <Subtitle
                        style={{marginTop: "20px"}}>{t('logicalOperands.basicOperators.truthTables.title')}</Subtitle>
                    <TruthTable>
                        <thead>
                        <TableHeader>
                            <HeaderCell>{t('logicalOperands.basicOperators.truthTables.tableHeaderA')}</HeaderCell>
                            {isBinaryOperator(op.truthTable) &&
                                <HeaderCell>{t('logicalOperands.basicOperators.truthTables.tableHeaderB')}</HeaderCell>}
                            <HeaderCell>{t('logicalOperands.basicOperators.truthTables.tableHeaderResult')}</HeaderCell>
                        </TableHeader>
                        </thead>
                        <tbody>
                        {op.truthTable.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.A ? 1 : 0}</TableCell>
                                {isBinaryOperator(op.truthTable) &&
                                    <TableCell>{(row as BinaryOperatorRow).B ? 1 : 0}</TableCell>} <ResultCell
                                isTrue={row.result}>{row.result ? 1 : 0}</ResultCell>
                            </TableRow>
                        ))}
                        </tbody>
                    </TruthTable>
                </StyledCard>
            ))}
            <BasicLogicalOperatorGame/>
            <Quiz identifier="LOGICAL_OPERANDS_BASIC_OPERATORS"/>
        </CoursePageMainContainer>
    );
};

export default BasicOperators;
