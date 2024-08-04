import React, {useState} from 'react';
import {Divider} from "@mui/material";
import {useTranslation} from "react-i18next";
import GraphTypesView from "./GraphTypesView";
import GraphIntroView from "./GraphIntroView";
import {CoursePageMainContainer, Title} from "../styles/StyledComponents";

const Introduction: React.FC = () => {
    const {t} = useTranslation();
    const [currentGraphType, setCurrentGraphType] = useState<string>("Undirected");

    return (
        <CoursePageMainContainer>
            <Title variant="h1">Introduction to Graph Theory: Connecting the Dots</Title>
            <GraphIntroView/>
            <Divider style={{margin: '40px 0', backgroundColor: '#4CAF50'}}/>
            <GraphTypesView currentGraphType={currentGraphType} setCurrentGraphType={setCurrentGraphType}/>
        </CoursePageMainContainer>
    );
}


export default Introduction;
