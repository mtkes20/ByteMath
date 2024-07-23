import React, {useState} from 'react';
import {Divider, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import GraphTypesView from "./GraphTypesView";
import GraphIntroView from "./GraphIntroView";

const Introduction: React.FC = () => {
    const {t} = useTranslation();
    const [currentGraphType, setCurrentGraphType] = useState<string>("Undirected");

    return (
        <Container>
            <Title variant="h1">Introduction to Graph Theory: Connecting the Dots</Title>
            <GraphIntroView/>
            <Divider style={{margin: '40px 0', backgroundColor: '#4CAF50'}}/>
            <GraphTypesView currentGraphType={currentGraphType} setCurrentGraphType={setCurrentGraphType}/>
        </Container>
    );
}

const Container = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "15px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a"
});

const Title = styled(Typography)({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
});

export default Introduction;
