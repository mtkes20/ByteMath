import {Button, Card, styled, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {StyledCard, StyledText, StyledTextField, Subtitle} from "../styles/StyledComponents";


const ModularArithmeticCalculator = () => {
    const [a, setA] = useState<string>('');
    const [b, setB] = useState<string>('');
    const [m, setM] = useState<string>('');
    const [operation, setOperation] = useState<string>('+');
    const [result, setResult] = useState<number | null>(null);

    const { t } = useTranslation();

    const handleCalculate = () => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        const mod = parseInt(m);

        if (isNaN(numA) || isNaN(numB) || isNaN(mod) || mod <= 0) {
            //TODO add component
            alert('Please enter valid numbers. Modulus must be positive.');
            return;
        }

        let res: number;
        switch (operation) {
            case '+':
                res = (numA + numB) % mod;
                break;
            case '-':
                res = ((numA - numB) % mod + mod) % mod; // Ensure positive result
                break;
            case '*':
                res = (numA * numB) % mod;
                break;
            case '^':
                res = modPow(numA, numB, mod);
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    const modPow = (base: number, exponent: number, modulus: number): number => {
        if (modulus === 1) return 0;
        let result = 1;
        base = base % modulus;
        while (exponent > 0) {
            if (exponent % 2 === 1) result = (result * base) % modulus;
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }
        return result;
    };

    return (
        <StyledCard>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}>
                <Subtitle>{t('numberTheory.modularArithmetic.calculator.title')}</Subtitle>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <StyledTextField
                        label="a"
                        type="number"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                    <StyledTextField
                        select
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="^">^</option>
                    </StyledTextField>
                    <StyledTextField
                        label="b"
                        type="number"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                    <Typography variant="h6" style={{ color: 'white', alignSelf: "center" }}>(mod</Typography>
                    <StyledTextField
                        label="m"
                        type="number"
                        value={m}
                        onChange={(e) => setM(e.target.value)}
                    />
                    <Typography variant="h6" style={{ color: 'white', alignSelf: "center" }}>)</Typography>
                </div>
                <Button variant="contained" style={{
                    backgroundColor: "#800080",
                    width: "150px",
                }} onClick={handleCalculate}>{t("calculate")}</Button>
                {result !== null && (
                    <StyledText style={{ marginTop: '10px', color: "#5C6BC0" }}>
                        {t('numberTheory.modularArithmetic.calculator.result', { a, operation, b, result, m })}
                    </StyledText>
                )}
            </div>
        </StyledCard>
    )
}

export default ModularArithmeticCalculator;