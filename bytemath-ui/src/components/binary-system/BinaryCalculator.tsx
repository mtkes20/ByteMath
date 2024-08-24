import React, {useState} from 'react';
import {FormControl, MenuItem, Select, styled, TextField, Typography} from "@mui/material";
import {StyledButton} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";

const BinaryCalculator: React.FC = () => {
    const [binary1, setBinary1] = useState<string>('');
    const [binary2, setBinary2] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [operation, setOperation] = useState<string>('add');
    const { t } = useTranslation()

    const handleBinaryChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/^[01]*$/.test(e.target.value)) {
            setBinary1(e.target.value);
        }
    };

    const handleBinaryChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/^[01]*$/.test(e.target.value)) {
            setBinary2(e.target.value);
        }
    };

    const calculate = () => {
        const num1 = parseInt(binary1, 2);
        const num2 = parseInt(binary2, 2);
        let res = 0;

        switch (operation) {
            case 'add':
                res = num1 + num2;
                break;
            case 'subtract':
                res = num1 - num2;
                break;
            case 'multiply':
                res = num1 * num2;
                break;
            case 'divide':
                res = Math.floor(num1 / num2);
                break;
            default:
                break;
        }

        setResult(res.toString(2));
    };

    return (
        <BinaryCalculatorContainer>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                width: "100%"
            }}>
                <StyledTextField
                    type="text"
                    value={binary1}
                    onChange={handleBinaryChange1}
                    placeholder={t("binarySystem.binaryArithmetic.calculator.enterFirstBinary")}
                />
                <FormControl>
                    <Select
                        value={operation}
                        label=""
                        onChange={(e) => setOperation(e.target.value)}
                        sx={{
                            '& .MuiSelect-select': {
                                color: 'white',
                                fontWeight: 'bold',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                        }}
                    >
                        <MenuItem value={"add"}>+</MenuItem>
                        <MenuItem value={"subtract"}>-</MenuItem>
                        <MenuItem value={"multiply"}>*</MenuItem>
                        <MenuItem value={"divide"}>/</MenuItem>
                    </Select>
                </FormControl>
                <StyledTextField
                    type="text"
                    value={binary2}
                    onChange={handleBinaryChange2}
                    placeholder={t("binarySystem.binaryArithmetic.calculator.enterSecondBinary")}                />
                <StyledButton
                    onClick={calculate}
                    disabled={binary1.length < 1 || binary2.length < 1}
                >
                    {t("calculate")}
                </StyledButton>
            </div>
            {!!result && (
                <Result>
                    {`${t("result")}: ${result}`}
                </Result>
            )}
        </BinaryCalculatorContainer>
    );
};

const BinaryCalculatorContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
}));

const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
        color: 'white',
        width: "300px"
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:before': {
        borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },

}));

const Result = styled(Typography)(() => ({
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
}));


export default BinaryCalculator;

