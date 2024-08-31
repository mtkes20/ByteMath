import {Table, TableCell, TableRow} from '@mui/material';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    CoursePageMainContainer,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title,
} from "../styles/StyledComponents";
import ColorMixer from "./ColorMixer";
import ClockWidget from "./ClockWidget";

const BinaryRepresentation = () => {
    const { t } = useTranslation();

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.representation.title')}</Title>
                    <StyledText>{t('binarySystem.representation.description')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.representation.placeValue.title')}</Subtitle>
                <StyledText>{t('binarySystem.representation.placeValue.description')}</StyledText>
                <Table>
                    <TableRow>
                        <TableCell>{t('binarySystem.representation.placeValue.table.position')}</TableCell>
                        <TableCell>2^7</TableCell>
                        <TableCell>2^6</TableCell>
                        <TableCell>2^5</TableCell>
                        <TableCell>2^4</TableCell>
                        <TableCell>2^3</TableCell>
                        <TableCell>2^2</TableCell>
                        <TableCell>2^1</TableCell>
                        <TableCell>2^0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('binarySystem.representation.placeValue.table.value')}</TableCell>
                        <TableCell>128</TableCell>
                        <TableCell>64</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>16</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                </Table>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.representation.patterns.title')}</Subtitle>
                <StyledText>{t('binarySystem.representation.patterns.description')}</StyledText>
                <StyledList>
                    {(t('binarySystem.representation.patterns.examples', { returnObjects: true }) as string[]).map((pattern, index) => (
                        <StyledListItem key={index}>{pattern}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.representation.binaryInColors.title')}</Subtitle>
                <StyledText>{t('binarySystem.representation.binaryInColors.description')}</StyledText>
                <ColorMixer />
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.representation.binaryClock.title')}</Subtitle>
                <StyledText>{t('binarySystem.representation.binaryClock.description')}</StyledText>
                <ClockWidget />
            </SubContent>
        </CoursePageMainContainer>
    );
};

export default BinaryRepresentation;