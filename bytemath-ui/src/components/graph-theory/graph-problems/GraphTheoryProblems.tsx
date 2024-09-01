import React from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer, Title} from "../../utils/StyledComponents";
import ProblemsPage from "../../problem/ProblemsPage";

const GraphTheoryProblems: React.FC = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer style={{
            padding: "15px 50px"
        }}>
            <ProblemsPage course="GRAPH_THEORY"/>
        </CoursePageMainContainer>
    );
};


export default GraphTheoryProblems;
