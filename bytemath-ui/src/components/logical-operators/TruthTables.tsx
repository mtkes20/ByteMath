import React from 'react';
import {styled} from "@mui/material";
import {CoursePageMainContainer, StyledCard, StyledExplanation, StyledText, Title} from "../styles/StyledComponents";

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

interface Operator {
    name: string;
    symbol: string;
    description: string;
    explanation: string;
    table: OperatorRow[];
}

const TruthTables: React.FC = () => {
    const operators: Operator[] = [
        {
            name: 'AND',
            symbol: '&&',
            description: 'Returns true if both operands are true.',
            explanation: 'The AND operator is used when you want to check if multiple conditions are all true. It\'s like checking if you have both your keys AND your wallet before leaving the house.',
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: false},
                {A: true, B: false, result: false},
                {A: true, B: true, result: true},
            ]
        },
        {
            name: 'OR',
            symbol: '||',
            description: 'Returns true if at least one of the operands is true.',
            explanation: 'The OR operator is used when you want to check if at least one of multiple conditions is true. It\'s like deciding to go for a walk if it\'s either sunny OR you have an umbrella.',
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: true},
            ]
        },
        {
            name: 'NOT',
            symbol: '!',
            description: 'Inverts the truth value of the operand.',
            explanation: 'The NOT operator is used to reverse a boolean value. It\'s like a light switch: if the light is on, NOT will turn it off, and if it\'s off, NOT will turn it on.',
            table: [
                {A: false, result: true},
                {A: true, result: false},
            ]
        },
        {
            name: 'XOR',
            symbol: '⊕',
            description: 'Returns true if exactly one of the operands is true.',
            explanation: 'The XOR (exclusive OR) operator returns true only when exactly one of its inputs is true. It\'s like a "one or the other, but not both" situation.',
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: false},
            ]
        }
    ];

    const isBinaryOperator = (op: Operator): op is Operator & { table: BinaryOperatorRow[] } => {
        return op.name !== 'NOT';
    };

    return (
        <CoursePageMainContainer>
            <Title variant="h1">Logical Operators and Truth Tables</Title>
            <StyledText>
                Logical operators are fundamental to programming and boolean logic. They allow us to evaluate
                expressions and make complex decisions. Below are the truth tables for the fundamental logic gates:
            </StyledText>

            {operators.map((op) => (
                <StyledCard key={op.name} elevation={2}>
                    <Title variant="h2">{op.name} ({op.symbol})</Title>
                    <StyledText>{op.description}</StyledText>
                    <StyledExplanation>{op.explanation}</StyledExplanation>
                    <TruthTable>
                        <thead>
                        <TableHeader>
                            <HeaderCell>A</HeaderCell>
                            {isBinaryOperator(op) && <HeaderCell>B</HeaderCell>}
                            <HeaderCell>Result</HeaderCell>
                        </TableHeader>
                        </thead>
                        <tbody>
                        {op.table.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.A ? 1 : 0}</TableCell>
                                {isBinaryOperator(op) && <TableCell>{(row as BinaryOperatorRow).B ? 1 : 0}</TableCell>}
                                <ResultCell isTrue={row.result}>{row.result ? 1 : 0}</ResultCell>
                            </TableRow>
                        ))}
                        </tbody>
                    </TruthTable>
                </StyledCard>
            ))}
        </CoursePageMainContainer>
    );
};

const TruthTable = styled('table')({
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    backgroundColor: "#2c2c2c",
    border: "1px solid #444",
});

const TableHeader = styled('tr')({
    backgroundColor: "#333333",
});

const HeaderCell = styled('th')({
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    border: "1px solid #444",
});

const TableRow = styled('tr')({
    '&:hover': {
        backgroundColor: "#3c3c3c",
    },
});

const TableCell = styled('td')({
    padding: "10px",
    textAlign: "center",
    border: "1px solid #444",
});

interface ResultCellProps {
    isTrue: boolean;
}

const ResultCell = styled('td')<ResultCellProps>(({isTrue}) => ({
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    color: isTrue ? "#66bb6a" : "#ef5350",
    border: "1px solid #444",
}));

export default TruthTables;
