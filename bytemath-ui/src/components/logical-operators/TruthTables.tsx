import React from 'react';
import {styled} from "@mui/material";
import {CoursePageMainContainer, StyledCard, StyledExplanation, StyledText, Title} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";

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
    const {t} = useTranslation();

    const operators: Operator[] = [
        {
            name: t('logicalOperands.truthTables.and.name'),
            symbol: t('logicalOperands.truthTables.and.symbol'),
            description: t('logicalOperands.truthTables.and.description'),
            explanation: t('logicalOperands.truthTables.and.explanation'),
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: false},
                {A: true, B: false, result: false},
                {A: true, B: true, result: true},
            ]
        },
        {
            name: t('logicalOperands.truthTables.or.name'),
            symbol: t('logicalOperands.truthTables.or.symbol'),
            description: t('logicalOperands.truthTables.or.description'),
            explanation: t('logicalOperands.truthTables.or.explanation'),
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: true},
            ]
        },
        {
            name: t('logicalOperands.truthTables.not.name'),
            symbol: t('logicalOperands.truthTables.not.symbol'),
            description: t('logicalOperands.truthTables.not.description'),
            explanation: t('logicalOperands.truthTables.not.explanation'),
            table: [
                {A: false, result: true},
                {A: true, result: false},
            ]
        },
        {
            name: t('logicalOperands.truthTables.xor.name'),
            symbol: t('logicalOperands.truthTables.xor.symbol'),
            description: t('logicalOperands.truthTables.xor.description'),
            explanation: t('logicalOperands.truthTables.xor.explanation'),
            table: [
                {A: false, B: false, result: false},
                {A: false, B: true, result: true},
                {A: true, B: false, result: true},
                {A: true, B: true, result: false},
            ]
        }
    ];

    const isBinaryOperator = (op: Operator): op is Operator & { table: BinaryOperatorRow[] } => {
        return op.name !== t('logicalOperands.truthTables.not.name');
    };

    return (
        <CoursePageMainContainer>
            <Title variant="h1">{t('logicalOperands.truthTables.title')}</Title>
            <StyledText>
                {t('logicalOperands.truthTables.description')}
            </StyledText>

            {operators.map((op) => (
                <StyledCard key={op.name} elevation={2}>
                    <Title variant="h2">{op.name} ({op.symbol})</Title>
                    <StyledText>{op.description}</StyledText>
                    <StyledExplanation>{op.explanation}</StyledExplanation>
                    <TruthTable>
                        <thead>
                        <TableHeader>
                            <HeaderCell>{t('logicalOperands.truthTables.tableHeaderA')}</HeaderCell>
                            {isBinaryOperator(op) &&
                                <HeaderCell>{t('logicalOperands.truthTables.tableHeaderB')}</HeaderCell>}
                            <HeaderCell>{t('logicalOperands.truthTables.tableHeaderResult')}</HeaderCell>
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
