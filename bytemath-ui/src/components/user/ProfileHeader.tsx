import React from 'react';
import { User, Pencil } from 'lucide-react';
import {StyledText} from "../utils/StyledComponents";
import './UserPage.css';

interface ProfileHeaderProps {
    profilePicture: Blob | null;
    handlePictureUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    username: string | undefined;
    email: string | undefined;
}

const ProfileHeader = ({ profilePicture, handlePictureUpload, username, email } : ProfileHeaderProps) => {

    return (
        <div className="user-header">
            <div className="profile-picture-container">
                {profilePicture ? (
                    <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="profile-picture"/>
                ) : (
                    <User className="user-icon"/>
                )}
                <label htmlFor="picture-upload" className="picture-upload-label">
                    <Pencil width={20} height={12} className="pencil-icon"/>
                </label>
                <input
                    id="picture-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePictureUpload}
                    style={{display: 'none'}}
                />
            </div>
            <StyledText>{username}</StyledText>
            <StyledText>{email}</StyledText>
        </div>
    );
};

export default ProfileHeader;
