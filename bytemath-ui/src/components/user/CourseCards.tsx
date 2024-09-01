import {Skeleton} from "@mui/material";
import {Subtitle} from "../utils/StyledComponents";
import React from "react";
import {Binary, Cable, Sigma, Waypoints} from "lucide-react";
import CourseApi from "../../api/course-api";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import './UserPage.css';

interface Course {
    title: string;
    value: string;
    icon: React.ElementType;
    color: string;
}

const courses: Course[] = [
    {title: 'binarySystemTitle', value: "binary-system", icon: Binary, color: '#C5CAE9'},
    {title: 'logicalOperandsTitle', value: "logic-operands", icon: Cable, color: '#9FA8DA'},
    {title: 'graphTheoryTitle', value: "graphs", icon: Waypoints, color: '#7986CB'},
    {title: 'numberTheoryTitle', value: "numbers-theory", icon: Sigma, color: '#5C6BC0'},
];

const CourseCards = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { keycloak } = useKeycloak()

    const fetchProgress = async (name: string) => {
        return await CourseApi.getCourseProgress(name, keycloak?.token)
    }

    const {
        data: binarySystemProgress,
        isLoading: binarySystemLoading
    } = useQuery<number | undefined>({
        queryKey: ["progress", "BINARY_SYSTEM"],
        queryFn: async () => await fetchProgress("BINARY_SYSTEM")
    });

    const {
        data: logicOperandsProgress,
        isLoading: logicOperandsLoading
    } = useQuery<number | undefined>({
        queryKey: ["progress", "LOGICAL_OPERANDS"],
        queryFn: async () => await fetchProgress("LOGICAL_OPERANDS")
    });

    const {
        data: graphTheoryProgress,
        isLoading: graphTheoryLoading
    } = useQuery<number | undefined>({
        queryKey: ["progress", "GRAPH_THEORY"],
        queryFn: async () => await fetchProgress("GRAPH_THEORY")
    });

    const {
        data: numberTheoryProgress,
        isLoading: numberTheoryLoading
    } = useQuery<number | undefined>({
        queryKey: ["progress", "NUMBER_THEORY"],
        queryFn: async () => await fetchProgress("NUMBER_THEORY")
    });

    return (
        <div className="course-progress-grid">
            {courses.map((course, index) => {
                let progress;
                let isLoading;
                if (course.value === "binary-system") {
                    progress = binarySystemProgress;
                    isLoading = binarySystemLoading;
                } else if (course.value === "logic-operands") {
                    progress = logicOperandsProgress;
                    isLoading = logicOperandsLoading;
                } else if (course.value === "graphs") {
                    progress = graphTheoryProgress;
                    isLoading = graphTheoryLoading;
                } else if (course.value === "numbers-theory") {
                    progress = numberTheoryProgress;
                    isLoading = numberTheoryLoading;
                }

                return (
                    isLoading ? <Skeleton
                            style={{
                                textAlign: "center",
                                minHeight: "365px",
                                color: "#b8b5b5",
                                borderRadius: "20px",
                                transition: "transform 0.3s ease",
                                transformOrigin: "top",
                            }}
                        /> :
                        <div
                            key={index}
                            className="course-progress-card"
                            onClick={() => navigate(`/courses/${course.value}`)}
                            style={{
                                backgroundColor: course.color,
                                cursor: "pointer"
                            }}>
                            <course.icon className="course-icon"/>
                            <Subtitle style={{
                                alignContent: "center",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}>{t(course.title)}</Subtitle>
                            <div className="progress-bar">
                                <div className="progress"
                                     style={{
                                         width: `${progress ?? 0}%`
                                     }}
                                />
                            </div>
                            {progress !== undefined && (
                                <p>{`${progress}% ${t("complete")}`}</p>
                            )}
                        </div>
                );
            })}
        </div>
    )
}

export default CourseCards