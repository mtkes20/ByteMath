import React, {useState} from 'react';
import {Button, Card, styled, TextField, Typography} from "@mui/material";

const LCMandGCD = () => {

    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "35px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a"
        }}>
            <Title>Least Common Multiple (LCM) and Greatest Common Divisor (GCD)</Title>
            <StyledCard>
                <Text>What are LCM and GCD?</Text>
                <Subtitle>Least Common Multiple (LCM)</Subtitle>
                <Text>The LCM of two or more integers is the smallest positive integer that is
                    divisible by each of the integers. For example, the LCM of 4 and 6 is 12.</Text>

                <Subtitle>Greatest Common Divisor (GCD)</Subtitle>
                <Text>The GCD of two or more integers is the largest positive integer that divides
                    each of the integers without a remainder. For example, the GCD of 8 and 12 is 4.</Text>
            </StyledCard>
            <div>
                <Title style={{fontWeight: "normal"}}>Why are LCM and GCD important?</Title>
                <StyledList sx={{listStyleType: 'disc'}}>
                    <StyledListItem>LCM is used in many areas of mathematics, including fractions, algebra, and
                        number theory.</StyledListItem>
                    <StyledListItem>GCD is fundamental in simplifying fractions, solving Diophantine equations, and
                        in various
                        algorithms in computer science.</StyledListItem>
                    <StyledListItem>Both LCM and GCD are crucial in cryptography, particularly in the RSA
                        algorithm.</StyledListItem>
                    <StyledListItem>In computer programming, LCM and GCD are used in various algorithms and data
                        structures.</StyledListItem>
                </StyledList>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <Title style={{fontWeight: "normal"}}>How to Calculate LCM and GCD</Title>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                }}>
                    <Subtitle>Calculating GCD</Subtitle>
                    <Text>The most efficient method to calculate GCD is the Euclidean algorithm:</Text>
                    <StyledList>
                        <StyledListItem>Divide the larger number by the smaller one.</StyledListItem>
                        <StyledListItem>Replace the larger number with the smaller number and the smaller number with
                            the
                            remainder from step 1.</StyledListItem>
                        <StyledListItem>Repeat until the remainder is zero. The last non-zero remainder is the
                            GCD.</StyledListItem>
                    </StyledList>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                }}>
                    <Subtitle>Calculating LCM</Subtitle>
                    <Text>LCM can be calculated using the formula:</Text>
                    <Text>LCM(a, b) = |a * b| / GCD(a, b)</Text>
                    <Text>Where |a * b| denotes the absolute value of a * b.</Text>
                </div>
            </div>
            <StyledCard>
                <Subtitle>Examples</Subtitle>
                <div>
                    <Title>GCD Example: Calculate GCD(48, 18)</Title>
                    <StyledList>
                        <StyledListItem>48 ÷ 18 = 2 remainder 12</StyledListItem>
                        <StyledListItem>18 ÷ 12 = 1 remainder 6</StyledListItem>
                        <StyledListItem>12 ÷ 6 = 2 remainder 0</StyledListItem>
                        <StyledListItem>The last non-zero remainder is 6, so GCD(48, 18) = 6</StyledListItem>
                    </StyledList>
                </div>
                <div>
                    <Title>LCM Example: Calculate LCM(12, 18)</Title>
                    <StyledList>
                        <StyledListItem>First, calculate GCD(12, 18) = 6</StyledListItem>
                        <StyledListItem>Then, LCM(12, 18) = |12 * 18| / 6 = 216 / 6 = 36</StyledListItem>
                    </StyledList>
                </div>
            </StyledCard>

        </div>
    );
};

const StyledList = styled('ol')({
    paddingLeft: '20px',
    listStylePosition: 'outside',
    color: 'white',
});

const StyledListItem = styled('li')({
    display: 'list-item',
    marginBottom: '8px',
    fontSize: '1rem',
    fontFamily: 'Roboto',
});

const Title = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h1"
}))

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}))


const Subtitle = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h2"
}))


const StyledCard = styled(Card)(() => ({
    backgroundColor: "transparent",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "0.5px solid white",
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

export default LCMandGCD;