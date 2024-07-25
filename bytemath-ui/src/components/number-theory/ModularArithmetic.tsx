import React from 'react';
import {Card, styled, Typography} from '@mui/material';

const ModularArithmetic: React.FC = () => {

    return (
        <Container>
            <Title>Modular Arithmetic</Title>

            <Card style={cardStyle}>
                <Subtitle>What is Modular Arithmetic?</Subtitle>
                <Text>
                    Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" after reaching a certain value — the modulus.
                    It's often described as "clock arithmetic" because it's similar to how hours on a clock wrap around from 12 back to 1.
                </Text>
            </Card>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <Subtitle>Key Concepts</Subtitle>
                <StyledList>
                    <StyledListItem>Congruence: We say a is congruent to b modulo m if m divides (a-b). We write this as a ≡ b (mod m).</StyledListItem>
                    <StyledListItem>Modular Addition: (a + b) mod m = ((a mod m) + (b mod m)) mod m</StyledListItem>
                    <StyledListItem>Modular Subtraction: (a - b) mod m = ((a mod m) - (b mod m) + m) mod m</StyledListItem>
                    <StyledListItem>Modular Multiplication: (a * b) mod m = ((a mod m) * (b mod m)) mod m</StyledListItem>
                    <StyledListItem>Modular Exponentiation: a^b mod m = ((a mod m)^b) mod m</StyledListItem>
                </StyledList>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <Subtitle>Applications</Subtitle>
                <Text>Modular arithmetic has many applications in computer science and cryptography:</Text>
                <StyledList sx={{listStyleType: 'disc'}}>
                    <StyledListItem>Hash functions</StyledListItem>
                    <StyledListItem>Random number generation</StyledListItem>
                    <StyledListItem>Error detection and correction codes</StyledListItem>
                    <StyledListItem>Cryptographic algorithms (like RSA)</StyledListItem>
                </StyledList>
            </div>
        </Container>
    );
};

const Container = styled('div')({
    padding: "50px",
    backgroundColor: "#1a1a1a",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    color: "white",
});

const StyledList = styled('ol')({
    paddingLeft: '20px',
    listStylePosition: 'outside',
    color: 'white',
    display: "flex",
    flexDirection: "column",
    gap: "10px"
});

const StyledListItem = styled('li')({
    display: 'list-item',
    marginBottom: '8px',
    fontSize: '1rem',
    fontFamily: 'Roboto',
});


const Title = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
    fontFamily: "Roboto",
});

const Subtitle = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
});

const Text = styled(Typography)({
    fontSize: "1rem",
    marginBottom: "10px",
    color: "white",
});

const cardStyle = {
    backgroundColor: "transparent",
    padding: "20px",
    marginBottom: "20px",
    border: "0.5px solid white",
};

export default ModularArithmetic;