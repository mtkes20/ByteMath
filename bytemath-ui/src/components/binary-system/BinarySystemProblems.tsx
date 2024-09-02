import React from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer} from "../utils/StyledComponents";
import ProblemsPage from "../problem/ProblemsPage";

const BinarySystemProblems: React.FC = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer style={{
            padding: "15px 50px"
        }}>
            <ProblemsPage course="BINARY_SYSTEM"/>
        </CoursePageMainContainer>
    );
};


export default BinarySystemProblems;
