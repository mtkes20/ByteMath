import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    CoursePageMainContainer,
    Example,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledOperatorCalculator,
    StyledOperatorCalculatorInput,
    StyledText,
    Subtitle,
    Title
} from '../styles/StyledComponents';
import Quiz from '../quiz/Quiz';
import styled from 'styled-components';
import LightBulb from '@mui/icons-material/Lightbulb';

interface SwitchProps {
    isOn: boolean;
    onClick: () => void;
}

const Switch: React.FC<SwitchProps> = ({isOn, onClick}) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={isOn ? "#4CAF50" : "#F44336"} strokeWidth="2"
         onClick={onClick} style={{cursor: 'pointer', transition: '0.3s'}}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>

        <circle cx={isOn ? "16" : "8"} cy="12" r="3"/>
    </svg>
);

const BoldText = styled.span`
    font-weight: bold;
    color: #58df4e;
`;

const Introduction: React.FC = () => {
    const {t} = useTranslation();
    const [switch1And, setSwitch1And] = useState<boolean>(false);
    const [switch2And, setSwitch2And] = useState<boolean>(false);
    const [switch1Or, setSwitch1Or] = useState<boolean>(false);
    const [switch2Or, setSwitch2Or] = useState<boolean>(false);

    const toggleSwitch = (switchNum: number, operation: 'and' | 'or') => {
        if (operation === 'and') {
            if (switchNum === 1) setSwitch1And(!switch1And);
            if (switchNum === 2) setSwitch2And(!switch2And);
        } else {
            if (switchNum === 1) setSwitch1Or(!switch1Or);
            if (switchNum === 2) setSwitch2Or(!switch2Or);
        }
    };

    const getAndResult = (): boolean => switch1And && switch2And;
    const getOrResult = (): boolean => switch1Or || switch2Or;

    return (
        <CoursePageMainContainer>
            <Title>{t('logicalOperands.introduction.title')}</Title>
            <StyledText>{t('logicalOperands.introduction.description')}</StyledText>

            <StyledCard>
                <Subtitle>{t('logicalOperands.introduction.moduleExploration.header')}</Subtitle>
                <StyledList>
                    <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.0')}</StyledListItem>
                    <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.1')}</StyledListItem>
                    <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.2')}</StyledListItem>
                </StyledList>
            </StyledCard>

            <StyledCard>
                <Subtitle>{t('logicalOperands.introduction.understandingImportance.header')}</Subtitle>
                <StyledList>
                    <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.0')}</StyledListItem>
                    <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.1')}</StyledListItem>
                    <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.2')}</StyledListItem>
                    <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.3')}</StyledListItem>
                </StyledList>
            </StyledCard>

            <Subtitle>{t('logicalOperands.introduction.realLifeExamples.header')}</Subtitle>
            <StyledText>{t('logicalOperands.introduction.realLifeExamples.description')}</StyledText>

            <StyledCard>
                <Subtitle>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.title')}</Subtitle>
                <Example>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.description')}</Example>

                <StyledOperatorCalculator>
                    <StyledText style={{marginBottom: "10px"}}>
                        <BoldText>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.andOperatorName')}</BoldText>
                        {t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.andOperator')}
                    </StyledText>
                    <StyledOperatorCalculatorInput>
                        <Switch isOn={switch1And} onClick={() => toggleSwitch(1, 'and')}/>
                        <StyledText>
                            <BoldText>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.andOperatorName')}</BoldText>
                        </StyledText>
                        <Switch isOn={switch2And} onClick={() => toggleSwitch(2, 'and')}/>
                        <StyledText>=</StyledText>
                        <LightBulb
                            style={{
                                color: getAndResult() ? "#FFD700" : "#808080",
                                width: "40px",
                                height: "40px",
                                cursor: 'pointer',
                                transition: '0.5s'
                            }}/>
                    </StyledOperatorCalculatorInput>

                    <StyledText style={{marginBottom: "10px"}}>
                        <BoldText>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.orOperatorName')}</BoldText>
                        {t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.orOperator')}
                    </StyledText>
                    <StyledOperatorCalculatorInput>
                        <Switch isOn={switch1Or} onClick={() => toggleSwitch(1, 'or')}/>
                        <StyledText>
                            <BoldText>{t('logicalOperands.introduction.realLifeExamples.lightSwitchExample.orOperatorName')}</BoldText>
                        </StyledText>
                        <Switch isOn={switch2Or} onClick={() => toggleSwitch(2, 'or')}/>
                        <StyledText>=</StyledText>
                        <LightBulb
                            style={{
                                color: getOrResult() ? "#FFD700" : "#808080",
                                width: "40px",
                                height: "40px",
                                cursor: 'pointer',
                                transition: '0.5s'
                            }}/>
                    </StyledOperatorCalculatorInput>
                </StyledOperatorCalculator>
            </StyledCard>

            <StyledText>{t('logicalOperands.introduction.progressNote')}</StyledText>
            <Quiz identifier="LOGICAL_OPERANDS_INTRO"/>
        </CoursePageMainContainer>
    );
}

export default Introduction;
