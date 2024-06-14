import React, { useState } from 'react';
import {styled, TextField, Typography} from "@mui/material";

const BinaryConverter: React.FC = () => {
    const [binary, setBinary] = useState<string>('');
    const [decimal, setDecimal] = useState<string>('');

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
                <Label>Binary:</Label>
                <StyledTextField
                    value={binary}
                    onChange={handleBinaryChange}
                    placeholder="Enter binary number"
                    sx={{
                        color: "white",
                    }}

                />
            </Converter>
            <Converter>
                <Label>Decimal:</Label>
                <StyledTextField
                    value={decimal}
                    onChange={handleDecimalChange}
                    placeholder="Enter decimal number"
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
    // margin: "10px 0"
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
