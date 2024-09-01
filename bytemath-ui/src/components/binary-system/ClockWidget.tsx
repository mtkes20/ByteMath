import React, { useState, useEffect } from 'react';
import {StyledCard, StyledText, SubContent, Subtitle} from "../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const ClockWidget = () => {
    const [time, setTime] = useState(new Date());
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const toBinary = (num: number) => num.toString(2).padStart(6, '0');

    const hours = toBinary(time.getHours());
    const minutes = toBinary(time.getMinutes());
    const seconds = toBinary(time.getSeconds());

    return (
        <StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.representation.binaryClock.title')}</Subtitle>
                <SubContent style={{ flexDirection: "row"}}>
                    <StyledText>{`${t("hours")}: ${hours}`}</StyledText>
                    <StyledText>{`${t("minutes")}: ${minutes}`}</StyledText>
                    <StyledText>{`${t("seconds")}: ${seconds}`}</StyledText>
                </SubContent>
                <StyledText>{`${t("currentTime")}: ${time.toLocaleTimeString()}`}</StyledText>
            </SubContent>
        </StyledCard>
    );
};

export default ClockWidget;