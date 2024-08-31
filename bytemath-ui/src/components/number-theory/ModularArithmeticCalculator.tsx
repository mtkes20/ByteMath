import {Typography} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {ResultText, StyledButton, StyledCard, StyledTextField, SubContent, Subtitle} from "../styles/StyledComponents";


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
            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.calculator.title')}</Subtitle>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <StyledTextField
                        size="small"
                        label="a"
                        type="number"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                    <StyledTextField
                        select
                        size="small"
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option style={{color: "#1a1a1a"}} value="+">+</option>
                        <option style={{color: "#1a1a1a"}} value="-">-</option>
                        <option style={{color: "#1a1a1a"}} value="*">*</option>
                        <option style={{color: "#1a1a1a"}} value="^">^</option>
                    </StyledTextField>
                    <StyledTextField
                        size="small"
                        label="b"
                        type="number"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                    <Typography variant="h6" style={{ color: 'white', alignSelf: "center" }}>(mod</Typography>
                    <StyledTextField
                        size="small"
                        label="m"
                        type="number"
                        value={m}
                        onChange={(e) => setM(e.target.value)}
                    />
                    <Typography variant="h6" style={{ color: 'white', alignSelf: "center" }}>)</Typography>
                    <StyledButton onClick={handleCalculate}>{t("calculate")}</StyledButton>
                </div>
                {result !== null && (
                    <ResultText>
                        {t('numberTheory.modularArithmetic.calculator.result', { a, operation, b, result, m })}
                    </ResultText>
                )}
            </SubContent>
        </StyledCard>
    )
}

export default ModularArithmeticCalculator;