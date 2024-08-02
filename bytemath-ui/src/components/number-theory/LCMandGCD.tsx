import React, {useState} from 'react';
import {Button, Card, styled, TextField, Typography} from "@mui/material";
import {
    CoursePageMainContainer,
    StyledCard,
    StyledList,
    StyledListItem, StyledText, StyledTextField, SubContent,
    Subtitle,
    Title
} from "../styles/StyledComponents";

const LCMandGCD = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [lcm, setLcm] = useState<null | number>(null);
    const [gcd, setGcd] = useState<null | number>(null);

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
        <CoursePageMainContainer>
            <Title>Least Common Multiple (LCM) and Greatest Common Divisor (GCD)</Title>
            <StyledCard>
                <StyledText>What are LCM and GCD?</StyledText>
                <Subtitle>Least Common Multiple (LCM)</Subtitle>
                <StyledText>The LCM of two or more integers is the smallest positive integer that is
                    divisible by each of the integers. For example, the LCM of 4 and 6 is 12.</StyledText>

                <Subtitle>Greatest Common Divisor (GCD)</Subtitle>
                <StyledText>The GCD of two or more integers is the largest positive integer that divides
                    each of the integers without a remainder. For example, the GCD of 8 and 12 is 4.</StyledText>
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

            <SubContent>
                <Title style={{fontWeight: "normal"}}>How to Calculate LCM and GCD</Title>
                <SubContent>
                    <Subtitle>Calculating GCD</Subtitle>
                    <StyledText>The most efficient method to calculate GCD is the Euclidean algorithm:</StyledText>
                    <StyledList>
                        <StyledListItem>Divide the larger number by the smaller one.</StyledListItem>
                        <StyledListItem>Replace the larger number with the smaller number and the smaller number with
                            the
                            remainder from step 1.</StyledListItem>
                        <StyledListItem>Repeat until the remainder is zero. The last non-zero remainder is the
                            GCD.</StyledListItem>
                    </StyledList>
                </SubContent>
                <SubContent>
                    <Subtitle>Calculating LCM</Subtitle>
                    <StyledText>LCM can be calculated using the formula:</StyledText>
                    <StyledText>LCM(a, b) = |a * b| / GCD(a, b)</StyledText>
                    <StyledText>Where |a * b| denotes the absolute value of a * b.</StyledText>
                </SubContent>
            </SubContent>
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

            <div style={{
                padding: "60px 0"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px"
                }}>
                    <StyledTextField
                        type="number"
                        placeholder="Enter first number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <StyledTextField
                        type="number"
                        placeholder="Enter second number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                    <Button style={{
                        color: "#5C6BC0"
                    }} onClick={calculateLcmGcd}>Calculate</Button>
                </div>
                {lcm !== null && gcd !== null && (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        padding: "20px 0"
                    }}>
                        <Typography style={{
                            color: "#5C6BC0",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                        }}>LCM: {lcm}</Typography>
                        <Typography style={{
                            color: "#5C6BC0",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                        }}>GCD: {gcd}</Typography>
                    </div>
                )}
            </div>
        </CoursePageMainContainer>
    );
};

export default LCMandGCD;