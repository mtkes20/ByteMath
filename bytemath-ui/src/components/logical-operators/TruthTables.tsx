import React from 'react';
import { styled, Typography } from "@mui/material";

const TruthTables = () => {

    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            overflowY: "auto"
        }}>

        <Container>
            <Title>Understanding Truth Tables</Title>
            <Text>
                Truth tables are a fundamental tool in logic, used to determine the output of various logical operations based on all possible input combinations. They are especially useful in fields like computer science and electrical engineering for designing circuits and programming conditional logic.
            </Text>

            <Section>
                <SectionTitle>AND (&&) Operator</SectionTitle>
                <Text>
                    The AND operator returns true if both operands are true.
                    <br />
                    <em>Example</em>: <code>true && false</code> results in <code>false</code>.
                </Text>
                <TruthTable>
                    <TableHeaderRow>
                        <TableHeader>Input A</TableHeader>
                        <TableHeader>Input B</TableHeader>
                        <TableHeader>Result (A && B)</TableHeader>
                    </TableHeaderRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                </TruthTable>
            </Section>

            <Section>
                <SectionTitle>OR (||) Operator</SectionTitle>
                <Text>
                    The OR operator returns true if at least one of the operands is true.
                    <br />
                    <em>Example</em>: <code>true || false</code> results in <code>true</code>.
                </Text>
                <TruthTable>
                    <TableHeaderRow>
                        <TableHeader>Input A</TableHeader>
                        <TableHeader>Input B</TableHeader>
                        <TableHeader>Result (A || B)</TableHeader>
                    </TableHeaderRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                </TruthTable>
            </Section>

            <Section>
                <SectionTitle>NOT (!) Operator</SectionTitle>
                <Text>
                    The NOT operator inverts the truth value of the operand.
                    <br />
                    <em>Example</em>: <code>!true</code> results in <code>false</code>.
                </Text>
                <TruthTable>
                    <TableHeaderRow>
                        <TableHeader>Input A</TableHeader>
                        <TableHeader>Result (!A)</TableHeader>
                        <TableHeader></TableHeader>
                    </TableHeaderRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TruthTable>
            </Section>

            <Section>
                <SectionTitle>XOR (⊕) Operator</SectionTitle>
                <Text>
                    The XOR operator returns true if exactly one of the operands is true.
                    <br />
                    <em>Example</em>: <code>true ⊕ false</code> results in <code>true</code>.
                </Text>
                <TruthTable>
                    <TableHeaderRow>
                        <TableHeader>Input A</TableHeader>
                        <TableHeader>Input B</TableHeader>
                        <TableHeader>Result (A ⊕ B)</TableHeader>
                    </TableHeaderRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>true</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>true</TableCell>
                        <TableCell>true</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                </TruthTable>
            </Section>
        </Container>
            </div>
    );
};

const Container = styled("div")(() => ({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "15px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "Roboto",
}));

const Title = styled(Typography)(() => ({
    fontSize: "2rem",
    fontWeight: "bold",
}));

const Section = styled("div")(() => ({
    marginBottom: "30px",
}));

const SectionTitle = styled(Typography)(() => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "20px",
}));

const Text = styled(Typography)(() => ({
    fontSize: "1rem",
    lineHeight: "1.5",
}));

const TruthTable = styled("div")(() => ({
    marginTop: "20px",
    border: "1px solid white",
    borderRadius: "5px",
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
}));

const TableHeaderRow = styled("div")(() => ({
    display: "contents",
    borderBottom: "2px solid white",
}));

const TableHeader = styled("div")(() => ({
    fontWeight: "bold",
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid white",
}));

const TableRow = styled("div")(() => ({
    display: "contents",
}));

const TableCell = styled("div")(() => ({
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid white",
}));

export default TruthTables;
