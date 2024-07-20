import {Button, styled, TextField, Typography} from "@mui/material";
import {useState} from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";


const Introduction = () => {

    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a"
        }}>
            <Title>Introduction to the Theory of Numbers</Title>
            <Text>The Theory of Numbers, also known as Number Theory, is a branch of pure mathematics devoted primarily
                to the study of the integers and integer-valued functions. It is one of the oldest and most fundamental
                areas of mathematics, with a rich history dating back to ancient civilizations.</Text>
            <Title>Key Concepts in Number Theory:</Title>
            <List sx={{listStyleType: 'disc'}}>
                <CustomListItemText>Prime Numbers: Numbers greater than 1 that have no positive divisors other than 1
                    and
                    themselves.</CustomListItemText>
                <CustomListItemText>Divisibility: The study of when one integer is divisible by
                    another.</CustomListItemText>
                <CustomListItemText>Greatest Common Divisor (GCD): The largest positive integer that divides each of the
                    numbers without a remainder.</CustomListItemText>
                <CustomListItemText>Least Common Multiple (LCM): The smallest positive integer that is divisible by each
                    of
                    the numbers.</CustomListItemText>
                <CustomListItemText>Modular Arithmetic: Arithmetic that deals with the remainders after
                    division.</CustomListItemText>
                <CustomListItemText>Diophantine Equations: Polynomial equations where only integer solutions are
                    sought.</CustomListItemText>
            </List>
            <Title>Applications of Number Theory:</Title>
            <List sx={{listStyleType: 'disc'}}>
                <CustomListItemText>Cryptography: Many encryption methods, including RSA, are based on number theory
                    principles.</CustomListItemText>
                <CustomListItemText>Computer Science: Algorithms, data structures, and error-correcting codes often rely
                    on
                    number theory
                    concepts.</CustomListItemText>
                <CustomListItemText>Physics: Number theory is used in various areas of theoretical physics, including
                    string
                    theory.</CustomListItemText>
                <CustomListItemText>Engineering: Applications in signal processing, control theory, and other
                    engineering
                    fields.</CustomListItemText>
            </List>
            <Text>Number theory continues to be an active area of research, with many unsolved problems and conjectures
                that have puzzled mathematicians for centuries.</Text>
        </div>
    )
}

const Title = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h1"
}))

const CustomListItemText = styled(ListItemText)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
    display: "list-item",
}))

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}))



export default Introduction;