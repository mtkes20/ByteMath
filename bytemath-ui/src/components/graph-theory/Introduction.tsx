import {styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import GraphBoard from "./GraphBoard";
import React from "react";


const Introduction = () => {

    const {t} = useTranslation();

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
            <Title>Introduction to Theory of Graphs</Title>
            <Text></Text>
            <div style={{
                padding: "60px"
            }}>
            </div>
            <GraphBoard/>
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

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}))

export default Introduction;
