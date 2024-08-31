import React from 'react';
import {Example, StyledCard, StyledText} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";

const BinaryExampleDisplay = ({example}: {
    example: string;

}) => {
    const { t } = useTranslation();
    return (
        <Example>
            <StyledText>{t("example") + ":"}</StyledText>
            <div style={{
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                padding: '10px',
                borderRadius: '5px',
            }}>
                {example}
            </div>
        </Example>
    );
};

export default BinaryExampleDisplay;