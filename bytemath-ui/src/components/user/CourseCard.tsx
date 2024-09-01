import React from 'react';
import ProgressBar from './ProgressBar';
import { Subtitle } from "../utils/StyledComponents";

interface CourseCardProps {
    title: string;
    icon: React.ElementType;
    progress?: number;
    color: string;
    onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon: Icon, progress = 0, color, onClick }) => {
    return (
        <div
            className="course-progress-card"
            onClick={onClick}
            style={{ backgroundColor: color, cursor: "pointer" }}
        >
            <Icon className="course-icon" />
            <Subtitle
                style={{
                    alignContent: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                }}
            >
                {title}
            </Subtitle>
            <ProgressBar progress={progress} color="#ffffff" />
            <p>{`${progress}% complete`}</p>
        </div>
    );
};

export default CourseCard;
