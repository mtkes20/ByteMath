import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCard, StyledText, Subtitle } from "../styles/StyledComponents";

const ConversionFlowchart = ({ type }: { type: string }) => {
    const { t } = useTranslation();

    const steps = t(`binarySystem.conversion.flowchart.${type}`, { returnObjects: true }) as string[];

    return (
        <StyledCard>
            {steps.map((step, index) => (
                <StyledText key={index}>{step}</StyledText>
            ))}
        </StyledCard>
    );
};

export default ConversionFlowchart;