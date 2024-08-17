import React from 'react';
import {Binary, Cable, Sigma, Waypoints} from 'lucide-react';
import './MainPage.css';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const courses = [
    { title: 'binarySystemTitle', value: "binary-system", icon: Binary, color: '#d9b3d9' },
    { title: 'logicalOperandsTitle', value: "logic-operands", icon: Cable, color: '#b266b2' },
    { title: 'graphTheoryTitle', value: "graphs", icon: Waypoints, color: '#993399' },
    { title: 'numberTheoryTitle', value: "numbers-theory", icon: Sigma, color: '#800080' },
];

const MainPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()

    return (
        <div className="main-page">
            <div className="course-grid">
                {courses.map((course, index) => (
                    <div
                        onClick={() => {
                            navigate("courses/" + course.value);
                        }}
                        key={index} className="course-card"
                        style={{ backgroundColor: course.color, cursor: "pointer" }}>
                        <div className="card-content">
                            <course.icon className="course-icon" />
                            <h2 className="course-title">{t(course.title)}</h2>
                            <p className="course-description">{t("clickToExplore")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;