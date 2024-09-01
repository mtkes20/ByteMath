import React from 'react';
import { Box, Typography } from '@mui/material';
import {StyledText} from "../utils/StyledComponents";
import {useTranslation} from "react-i18next";

export type ProblemCompletionStatsType = {
    easyCompleted: number;
    easyTotal: number;
    mediumCompleted: number;
    mediumTotal: number;
    hardCompleted: number;
    hardTotal: number;
    completed: number;
    total: number;
};

const ProblemCompletionStats: React.FC<{ stats: ProblemCompletionStatsType }> = ({ stats }) => {
    const { t } = useTranslation();
    const easyPercentage = (stats.easyCompleted / stats.total) * 100;
    const mediumPercentage = (stats.mediumCompleted / stats.total) * 100;
    const hardPercentage = (stats.hardCompleted / stats.total) * 100;

    const createCircleSegment = (startPercentage: number, endPercentage: number, color: string) => {
        const startAngle = startPercentage * 3.6 - 90;
        const endAngle = endPercentage * 3.6 - 90;

        const startX = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
        const startY = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
        const endX = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
        const endY = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return {
            path: `M 50 50 L ${startX} ${startY} A 45 45 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
            fill: color
        };
    };

    const segments = [
        createCircleSegment(0, easyPercentage === 100 ? 99.9 : easyPercentage, '#4caf50'),
        createCircleSegment(easyPercentage, easyPercentage + (mediumPercentage === 100 ? 99.9 : mediumPercentage), '#ffa726'),
        createCircleSegment(easyPercentage + mediumPercentage, easyPercentage + mediumPercentage + (hardPercentage === 100 ? 99.9 : hardPercentage), '#f44336')
    ];

    return (
        <div style={{
            backgroundColor: '#242424',
            borderRadius: '8px',
            padding: '12px',
            width: '280px',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center"
        }}>
            <StyledText>{t("problemCompletion")}</StyledText>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: "100%"
            }}>
                <Box sx={{position: 'relative', width: '100px', height: '100px', margin: '0'}}>
                    <svg viewBox="0 0 100 100" width="100" height="100">
                        {segments.map((segment, index) => (
                            <path key={index} d={segment.path} fill={segment.fill}/>
                        ))}
                        <circle cx="50" cy="50" r="40" fill="#242424"/>
                    </svg>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', lineHeight: 1}}>
                            {stats.completed}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', lineHeight: 1, color: "#777272"}}>
                            {"/"}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', lineHeight: 1}}>
                            {stats.total}
                        </Typography>
                    </Box>
                </Box>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center', width: "100%", gap: "6px"}}>
                        <Box sx={{width: '20px', height: '4px', bgcolor: '#4caf50', borderRadius: '2px',}}/>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {`${t("easy")} `}
                        </Typography>
                        <Typography sx={{ alignSelf: "flex-end" }}>
                            {stats.easyCompleted}/{stats.easyTotal}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', width: "100%", gap: "6px"}}>
                        <Box sx={{width: '20px', height: '4px', bgcolor: '#ffa726', borderRadius: '2px'}}/>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {`${t("medium")} `}
                        </Typography>
                        <Typography sx={{ alignSelf: "flex-end" }}>
                            {stats.mediumCompleted}/{stats.mediumTotal}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', width: "100%", gap: "6px"}}>
                        <Box sx={{width: '20px', height: '4px', bgcolor: '#f44336', borderRadius: '2px',}}/>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {`${t("hard")} `}
                        </Typography>
                        <Typography sx={{ alignSelf: "flex-end" }}>
                            {stats.hardCompleted}/{stats.hardTotal}
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default ProblemCompletionStats;