import React, {ChangeEvent, useEffect} from 'react';
import './UserPage.css';
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import ProfilePictureApi from "../../api/profile-picture-api";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import ProblemApi from "../../api/problem-api";
import ProblemCompletionStats from "./ProblemCompletionStats";
import {ProblemCompletionStatsType} from "../../types/ProblemType";
import CourseCards from "./CourseCards";
import ProfileHeader from "./ProfileHeader";

const UserPage = () => {
    const {t} = useTranslation();
    const {keycloak, isAuthenticated, username, email, profilePicture, refetchProfilePicture} = useKeycloak();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated || !keycloak?.token) {
            navigate('/');
        } else {
            ProblemApi.getProblemCompletionStats(keycloak?.token).then((stats) => {
                console.log(stats);
            });
        }
    }, [isAuthenticated]);

    const {
        data: problemsStat,
        isLoading: problemsLoading
    } = useQuery<ProblemCompletionStatsType | undefined>({
        queryKey: ["problemsStat", keycloak?.token],
        queryFn: async () => await ProblemApi.getProblemCompletionStats(keycloak?.token)
    });

    const handlePictureUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && keycloak && isAuthenticated) {
            try {
                await ProfilePictureApi.uploadProfilePicture(file, keycloak.token).then(() => {
                    refetchProfilePicture();
                });
            } catch (error) {
                console.error('Error uploading profile picture:', error);
            }
        }
    };

    return (
        <div className="user-page">
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0 100px",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <ProfileHeader
                    profilePicture={profilePicture || null}
                    handlePictureUpload={handlePictureUpload}
                    username={username}
                    email={email}
                />
                {!!problemsStat && <ProblemCompletionStats stats={problemsStat}/>}
            </div>
            <CourseCards/>
        </div>
    );
};

export default UserPage;
