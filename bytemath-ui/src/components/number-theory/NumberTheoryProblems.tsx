import React from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer} from "../utils/StyledComponents";
import ProblemsPage from "../problem/ProblemsPage";

const NumberTheoryProblems: React.FC = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer style={{
            padding: "15px 50px"
        }}>
            <ProblemsPage course="NUMBER_THEORY"/>
        </CoursePageMainContainer>
    );
};


export default NumberTheoryProblems;
