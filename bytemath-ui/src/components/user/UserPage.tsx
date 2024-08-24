import React, {ChangeEvent, useState} from 'react';
import {Binary, Cable, Pencil, Sigma, User, Waypoints} from 'lucide-react';
import './UserPage.css';
import {useTranslation} from "react-i18next";

interface Course {
    title: string;
    value: string;
    icon: React.ElementType;
    color: string;
}

const courses : Course[] = [
    { title: 'binarySystemTitle', value: "binary-system", icon: Binary, color: '#C5CAE9' },
    { title: 'logicalOperandsTitle', value: "logic-operands", icon: Cable, color: '#9FA8DA' },
    { title: 'graphTheoryTitle', value: "graphs", icon: Waypoints, color: '#7986CB' },
    { title: 'numberTheoryTitle', value: "numbers-theory", icon: Sigma, color: '#5C6BC0' },
];

const UserPage = () => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const { t } = useTranslation()

    const handlePictureUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('picture', file);

            setProfilePicture(URL.createObjectURL(file));

            // try {
            //     const response = await fetch('/api/upload-profile-picture', {
            //         method: 'POST',
            //         headers: {
            //             Authorization: `Bearer ${keycloak.token}`,
            //         },
            //         body: formData,
            //     });
            //
            //     if (response.ok) {
            //         const result = await response.json();
            //         setProfilePicture(result.pictureUrl);
            //         await keycloak.updateProfile({ picture: result.pictureUrl });
            //     } else {
            //         console.error('Failed to upload picture');
            //     }
            // } catch (error) {
            //     console.error('Error uploading picture:', error);
            // }
        }
    };



    const user = {
        name: "Tekl Liko",
        email: "tekladrakoni@gmail.com",
        progress: 65,
        completedCourses: 2,
        totalCourses: 4
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
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
            <div className="course-progress-grid">
                {courses.map((course, index) => (
                    <div key={index} className="course-progress-card"
                         style={{
                             backgroundColor: course.color,
                             cursor: "pointer"
                    }}>
                        <course.icon
                            className="course-icon"/>
                        <h2 >{t(course.title)}</h2>
                        <div className="progress-bar">
                            <div className="progress" style={{width: `${Math.random() * 100}%`}}></div>
                        </div>
                        <p>{`${Math.floor(Math.random() * 100)}% ${t("complete")}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;