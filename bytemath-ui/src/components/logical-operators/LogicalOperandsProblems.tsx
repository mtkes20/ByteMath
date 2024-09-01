import React from 'react';
import {CoursePageMainContainer} from "../styles/StyledComponents";
import ProblemsPage from "../problem/ProblemsPage";


const LogicalOperandsProblems: React.FC = () => {

    return (
        <CoursePageMainContainer style={{
            padding: "15px 50px"
        }}>
            <ProblemsPage course="LOGICAL_OPERANDS"/>
        </CoursePageMainContainer>
    );
};


export default LogicalOperandsProblems;
