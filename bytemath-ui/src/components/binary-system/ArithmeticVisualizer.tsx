import React, {useState} from 'react';
import {StyledCard, StyledText, StyledTextField, StyledButton} from "../utils/StyledComponents";
import {Stack} from "@mui/material";
import {useTranslation} from "react-i18next";

interface BinaryArithmeticVisualizerProps {
    operation: 'addition' | 'subtraction' | 'multiplication' | 'division';
}

const ArithmeticVisualizer: React.FC<BinaryArithmeticVisualizerProps> = ({operation}) => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [steps, setSteps] = useState<string[]>([]);
    const {t} = useTranslation();

    const validateBinary = (input: string): boolean => {
        return /^[01]*$/.test(input);
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (validateBinary(value)) {
            setter(value);
        }
    };

    const padZeros = (a: string, b: string): [string, string] => {
        const maxLength = Math.max(a.length, b.length);
        return [a.padStart(maxLength, '0'), b.padStart(maxLength, '0')];
    };

    const performOperation = () => {
        let [paddedNum1, paddedNum2] = padZeros(num1, num2);
        let decimalNum1 = parseInt(paddedNum1, 2);
        let decimalNum2 = parseInt(paddedNum2, 2);
        let decimalResult: number;
        let binaryResult: string;
        let newSteps: string[] = [];

        switch (operation) {
            case 'addition':
                decimalResult = decimalNum1 + decimalNum2;
                binaryResult = decimalResult.toString(2).padStart(paddedNum1.length, '0');
                newSteps = [
                    `  ${paddedNum1}`,
                    `+ ${paddedNum2}`,
                    '-'.repeat(Math.max(paddedNum1.length, paddedNum2.length) + 2),
                    `  ${binaryResult}`
                ];
                break;
            case 'subtraction':
                decimalResult = decimalNum1 - decimalNum2;
                binaryResult = decimalResult.toString(2).padStart(paddedNum1.length, '0');
                newSteps = [
                    `  ${paddedNum1}`,
                    `- ${paddedNum2}`,
                    '-'.repeat(Math.max(paddedNum1.length, paddedNum2.length) + 2),
                    `  ${binaryResult}`
                ];
                break;
            case 'multiplication':
                decimalResult = decimalNum1 * decimalNum2;
                binaryResult = decimalResult.toString(2).padStart(paddedNum1.length, '0');
                newSteps = [
                    `  ${paddedNum1}`,
                    `× ${paddedNum2}`,
                    '-'.repeat(Math.max(paddedNum1.length, paddedNum2.length) + 2),
                    ...num2.split('').reverse().map((bit, index) => {
                        if (bit === '1') {
                            return '  ' + paddedNum1.padStart(paddedNum1.length + index, '0');
                        }
                        return '  ' + '0'.repeat(paddedNum1.length + index);
                    }),
                    '-'.repeat(binaryResult.length + 2),
                    `  ${binaryResult}`
                ];
                break;
            case 'division':
                if (decimalNum2 === 0) {
                    setSteps(['Error: Division by zero']);
                    return;
                }
                decimalResult = Math.floor(decimalNum1 / decimalNum2);
                let remainder = decimalNum1 % decimalNum2;
                binaryResult = decimalResult.toString(2);
                newSteps = [
                    `  ${paddedNum1} ÷ ${paddedNum2}`,
                    `= ${binaryResult} (quotient)`,
                    `remainder ${remainder.toString(2)}`
                ];
                break;
        }

        setResult(binaryResult);
        setSteps(newSteps);
    };

    return (
        <StyledCard>
            <Stack display={"flex"} flexDirection={"row"} gap={"50px"}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px"
                    }}>
                        <StyledTextField
                            size="small"
                            label={`${t("binaryNumber")} 1`}
                            value={num1}
                            onChange={handleInputChange(setNum1)}
                            placeholder={t("enterOnesAndZeros")}
                        />
                        <StyledTextField
                            size="small"
                            label={`${t("binaryNumber")} 2`}
                            value={num2}
                            onChange={handleInputChange(setNum2)}
                            placeholder={t("enterOnesAndZeros")}
                        />
                    </div>
                    <StyledButton
                        disabled={!num1 || !num2 || num1.length < 1 || num2.length < 1}
                        onClick={performOperation}>{t("calculate")}</StyledButton>
                    {result && <StyledText>{`${t("result")}: ${result}`}</StyledText>}
                </div>
            </Stack>
        </StyledCard>
    );
};

export default ArithmeticVisualizer;
