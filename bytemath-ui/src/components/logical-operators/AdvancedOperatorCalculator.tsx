import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, styled, Typography} from "@mui/material";

const AdvancedOperatorCalculator: React.FC = () => {
    const [value1, setValue1] = useState<boolean>(false);
    const [value2, setValue2] = useState<boolean>(false);
    const [operation, setOperation] = useState<string>('AND');
    const [result, setResult] = useState<boolean | null>(null);

    const calculate = () => {
        let res: boolean;
        switch (operation) {
            case 'XOR':
                res = value1 !== value2;
                break;
            default:
                res = false;
                break;
        }
        setResult(res);
    };

    return (
        <CalculatorContainer>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                width: "100%"
            }}>
                <FormControl>
                    <Select
                        value={value1.toString()}
                        onChange={(e) => setValue1(e.target.value === 'true')}
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
                        <MenuItem value={"true"}>True</MenuItem>
                        <MenuItem value={"false"}>False</MenuItem>
                    </Select>
                </FormControl>

                {operation !== 'NOT' && (
                    <FormControl>
                        <Select
                            value={value2.toString()}
                            onChange={(e) => setValue2(e.target.value === 'true')}
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
                            <MenuItem value={"true"}>True</MenuItem>
                            <MenuItem value={"false"}>False</MenuItem>
                        </Select>
                    </FormControl>
                )}

                <FormControl>
                    <Select
                        value={operation}
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
                        <MenuItem value={"AND"}>xor (⊕)</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    style={{
                        backgroundColor: "#800080",
                        padding: "5px 10px",
                        color: "#ffffff",
                        fontFamily: "Roboto",
                    }}
                    onClick={calculate}
                >
                    Calculate
                </Button>
            </div>
            <Result>
                {result != null ? "Result: " + String(result) : ""}
            </Result>
        </CalculatorContainer>
    );
};

const CalculatorContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
}));

const Result = styled(Typography)(() => ({
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
}));

export default AdvancedOperatorCalculator;
