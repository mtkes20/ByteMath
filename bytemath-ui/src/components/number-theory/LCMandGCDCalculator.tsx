import {ResultText, StyledButton, StyledCard, StyledTextField, SubContent} from "../utils/StyledComponents";
import {Stack} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";


const LCMandGCDCalculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [lcm, setLcm] = useState<null | number>(null);
    const [gcd, setGcd] = useState<null | number>(null);

    const { t } = useTranslation()

    const calculateLcmGcd = () => {
        const a = parseInt(num1);
        const b = parseInt(num2);

        if (isNaN(a) || isNaN(b)) {
            alert('Please enter valid numbers');
            return;
        }

        const gcdValue = calculateGcd(a, b);
        const lcmValue = (a * b) / gcdValue;

        setGcd(gcdValue);
        setLcm(lcmValue);
    };

    const calculateGcd = (a: number, b: number): number => {
        return b === 0 ? a : calculateGcd(b, a % b);
    };

    return (
        <StyledCard>
            <SubContent>
                <Stack display={"flex"} flexDirection={"row"} gap={"20px"}>
                    <StyledTextField
                        size="small"
                        type="number"
                        placeholder={t('numberTheory.lcmAndGcd.calculator.enterFirstNumber')}
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <StyledTextField
                        size="small"
                        type="number"
                        placeholder={t('numberTheory.lcmAndGcd.calculator.enterSecondNumber')}
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                    <StyledButton onClick={calculateLcmGcd}>{t("calculate")}</StyledButton>
                </Stack>
                {lcm !== null && gcd !== null && (
                    <SubContent>
                        <ResultText>{`${t("numberTheory.lcmAndGcd.calculator.lcm")}: ${lcm}`}</ResultText>
                        <ResultText>{`${t("numberTheory.lcmAndGcd.calculator.gcd")}: ${gcd}`}</ResultText>
                    </SubContent>
                )}
            </SubContent>
        </StyledCard>
    )
}

export default LCMandGCDCalculator;