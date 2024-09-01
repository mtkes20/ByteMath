import React from 'react';

interface ProgressBarProps {
    progress: number;
    color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{
                    width: `${progress}%`,
                    backgroundColor: color,
                }}
            />
        </div>
    );
};

export default ProgressBar;
