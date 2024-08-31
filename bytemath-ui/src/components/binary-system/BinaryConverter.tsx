import React, { useState } from 'react';
import {styled, TextField, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const BinaryConverter: React.FC = () => {
    const [binary, setBinary] = useState<string>('');
    const [decimal, setDecimal] = useState<string>('');
    const { t } = useTranslation()

    const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[01]*$/.test(value)) {
            setBinary(value);
            setDecimal(value ? parseInt(value, 2).toString(10) : '');
        }
    };

    const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDecimal(value);
            setBinary(value ? parseInt(value, 10).toString(2) : '');
        }
    };

    return (
        <BinaryConverterContainer style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: "100px"
        }}>
            <Converter>
                <Label>{`${t("binarySystem.conversion.calculator.binary")}:`}</Label>
                <StyledTextField
                    size="small"
                    value={binary}
                    onChange={handleBinaryChange}
                    placeholder={t("binarySystem.conversion.calculator.enterBinaryNumber")}
                    sx={{
                        width: "250px"
                    }}

                />
            </Converter>
            <Converter>
                <Label>{`${t("binarySystem.conversion.calculator.decimal")}:`}</Label>
                <StyledTextField
                    size="small"
                    value={decimal}
                    onChange={handleDecimalChange}
                    placeholder={t("binarySystem.conversion.calculator.enterDecimalNumber")}
                    sx={{
                        width: "250px"
                    }}
                />
            </Converter>
        </BinaryConverterContainer>
    );
};

const BinaryConverterContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px"
}));

const Converter = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}));

const Label = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
    width: "100px"
}));

const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
        color: 'white',
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

export default BinaryConverter;
