import React, {ChangeEvent, useEffect, useState} from 'react';
import {Binary, Cable, Pencil, Sigma, User, Waypoints} from 'lucide-react';
import './UserPage.css';
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import ProfilePictureApi from "../../api/profile-picture-api";
import CourseApi from "../../api/course-api";
import {useQuery} from "@tanstack/react-query";
import {Skeleton} from "@mui/material";
import {useNavigate} from "react-router-dom";

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

const UserPage = () => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const {t} = useTranslation();
    const {keycloak, isAuthenticated, username, email} = useKeycloak();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);

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

    useEffect(() => {
        const fetchProfilePicture = async () => {
            if (isAuthenticated && keycloak) {
                try {
                    console.log('Fetching profile picture...');
                    const blob = await ProfilePictureApi.getProfilePicture(keycloak.token);
                    const imageUrl = URL.createObjectURL(blob);
                    setProfilePicture(imageUrl);
                    console.log('Profile picture fetched successfully');
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                }
            }
        };
        fetchProfilePicture();
    }, [isAuthenticated, keycloak]);

    const handlePictureUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && keycloak && isAuthenticated) {
            try {
                await ProfilePictureApi.uploadProfilePicture(file, keycloak.token);
                const imageUrl = URL.createObjectURL(file);
                setProfilePicture(imageUrl);
            } catch (error) {
                console.error('Error uploading profile picture:', error);
            }
        }
    };

    return (
        <div className="user-page">
            <div className="user-header">
                <div className="profile-picture-container">
                    {profilePicture ? (
                        <img src={profilePicture} alt="Profile" className="profile-picture"/>
                    ) : (
                        <User className="user-icon"/>
                    )}
                    <label htmlFor="picture-upload" className="picture-upload-label">
                        <Pencil className="pencil-icon"/>
                    </label>
                    <input
                        id="picture-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePictureUpload}
                        style={{display: 'none'}}
                    />
                </div>
                <h1>{username}</h1>
                <p>{email}</p>
            </div>
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
                                <h2 style={{
                                    alignContent: "center",
                                    minHeight: "75px",
                                }}>{t(course.title)}</h2>
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
        </div>
    );
};

export default UserPage;
