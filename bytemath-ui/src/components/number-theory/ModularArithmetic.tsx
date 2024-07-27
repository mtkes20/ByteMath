import React from 'react';
import {Card, styled, Typography} from '@mui/material';
import ModularArithmeticCalculator from "./ModularArithmeticCalculator";
import {useTranslation} from "react-i18next";

const ModularArithmetic: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title>{t('numberTheory.modularArithmetic.title')}</Title>
            <Card style={cardStyle}>
                <SubContent>
                    <Subtitle>{t('numberTheory.modularArithmetic.introduction.title')}</Subtitle>
                    <Text>{t('numberTheory.modularArithmetic.introduction.description')}</Text>
                </SubContent>
            </Card>
            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.keyConcepts.title')}</Subtitle>
                <StyledList>
                    {(t('numberTheory.modularArithmetic.keyConcepts.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.applications.title')}</Subtitle>
                <Text>{t('numberTheory.modularArithmetic.applications.description')}</Text>
                <StyledList sx={{listStyleType: 'disc'}}>
                    <StyledList sx={{listStyleType: 'disc'}}>
                        {(t('numberTheory.modularArithmetic.applications.list', { returnObjects: true }) as string[]).map((item, index) => (
                            <StyledListItem key={index}>{item}</StyledListItem>
                        ))}
                    </StyledList>
                </StyledList>
            </SubContent>
            <ModularArithmeticCalculator/>
        </Container>
    );
};

const Container = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "30px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a"
});

const SubContent = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
});

const StyledList = styled('ol')({
    listStylePosition: 'inside',
    paddingInlineStart: '0px',
    color: 'white',
    display: "flex",
    flexDirection: "column",
    gap: "15px"
});

const StyledListItem = styled('li')({
    display: 'list-item',
    fontSize: '1rem',
    fontFamily: 'Roboto',
});


const Title = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
    fontFamily: "Roboto",
});

const Subtitle = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
});

const Text = styled(Typography)({
    fontSize: "1rem",
    marginBottom: "10px",
    color: "white",
});

const cardStyle = {
    backgroundColor: "transparent",
    padding: "20px",
    border: "0.5px solid white",
};

export default ModularArithmetic;