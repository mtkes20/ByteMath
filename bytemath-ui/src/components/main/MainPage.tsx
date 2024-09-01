import React from 'react';
import {Binary, Cable, Sigma, Waypoints} from 'lucide-react';
import './MainPage.css';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";

const courses = [
    {title: 'binarySystemTitle', value: "binary-system", icon: Binary, color: '#C5CAE9'},
    {title: 'logicalOperandsTitle', value: "logic-operands", icon: Cable, color: '#9FA8DA'},
    {title: 'graphTheoryTitle', value: "graphs", icon: Waypoints, color: '#7986CB'},
    {title: 'numberTheoryTitle', value: "numbers-theory", icon: Sigma, color: '#5C6BC0'},
];

const MainPage = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()

    return (
        <div className="main-page">
            <Typography style={{
                fontSize: "24px",
                color: "white",
                fontFamily: "Roboto",
                animation: "fadeIn 5s infinite",
            }}>{t("chooseCourse")}</Typography>
            <div className="course-grid">
                {courses.map((course, index) => (
                    <div
                        onClick={() => {
                            navigate("courses/" + course.value);
                        }}
                        key={index} className="course-card"
                        style={{backgroundColor: course.color, cursor: "pointer"}}>
                        <course.icon className="course-icon"/>
                        <h2 className="course-title">{t(course.title)}</h2>
                        <p className="course-description">{t("clickToExplore")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;