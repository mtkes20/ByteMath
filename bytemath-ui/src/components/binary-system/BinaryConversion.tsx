import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    CoursePageMainContainer,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title,
    Example,
} from "../utils/StyledComponents";
import BinaryConverter from "./BinaryConverter";
import ConversionFlowchart from "./ConversionFlowChart";
import {styled, Table, TableCell, TableRow} from "@mui/material";
import BinaryGameWidget from "./BinaryGameWidget";
import BinaryExampleDisplay from "./BinaryExampleDisplay";
import Quiz from "../quiz/Quiz";

const BinaryConversion = () => {
    const { t } = useTranslation();

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.conversion.title')}</Title>
                    <StyledText>{t('binarySystem.conversion.description')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.conversion.decimalToBinary.title')}</Subtitle>
                <StyledText>{t('binarySystem.conversion.decimalToBinary.description')}</StyledText>
                <ConversionFlowchart type="decimalToBinary" />
                <BinaryExampleDisplay example={t('binarySystem.conversion.decimalToBinary.example')}/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.conversion.binaryToDecimal.title')}</Subtitle>
                <StyledText>{t('binarySystem.conversion.binaryToDecimal.description')}</StyledText>
                <ConversionFlowchart type="binaryToDecimal" />
                <BinaryExampleDisplay example={t('binarySystem.conversion.binaryToDecimal.example')}/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.conversion.shortcutMethods.title')}</Subtitle>
                <StyledText>{t('binarySystem.conversion.shortcutMethods.description')}</StyledText>
                <StyledList>
                    {(t('binarySystem.conversion.shortcutMethods.methods', { returnObjects: true }) as string[]).map((method, index) => (
                        <StyledListItem key={index}>{method}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.conversion.conversionTable.title')}</Subtitle>
                <StyledText>{t('binarySystem.conversion.conversionTable.description')}</StyledText>
                <Table>
                    <TableRow>
                        <StyledTableCell>{t('binarySystem.conversion.conversionTable.decimal')}</StyledTableCell>
                        <StyledTableCell style={{
                        }}>{t('binarySystem.conversion.conversionTable.binary')}</StyledTableCell>
                        <StyledTableCell>{t('binarySystem.conversion.conversionTable.decimal')}</StyledTableCell>
                        <StyledTableCell>{t('binarySystem.conversion.conversionTable.binary')}</StyledTableCell>
                    </TableRow>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <TableRow key={num}>
                            <StyledTableCell>{num}</StyledTableCell>
                            <StyledTableCell style={{
                                borderRight: "1px solid white"

                            }}>{num.toString(2)}</StyledTableCell>
                            <StyledTableCell>{num + 8}</StyledTableCell>
                            <StyledTableCell>{(num + 8).toString(2)}</StyledTableCell>
                        </TableRow>
                    ))}
                </Table>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.conversion.converter.title')}</Subtitle>
                <StyledText>{t('binarySystem.conversion.converter.description')}</StyledText>
                <BinaryConverter />
            </SubContent>

            <SubContent>
                <StyledText>{t('binarySystem.conversion.game.description')}</StyledText>
                <BinaryGameWidget/>
            </SubContent>
            <Quiz identifier={"BINARY_SYSTEM_CONVERTING"}/>
        </CoursePageMainContainer>
    );
};

export default BinaryConversion;

const StyledTableCell = styled(TableCell)({
    textAlign: "center",
    flex: 1
})

const StyledTableText = styled(StyledText)({
    width: "50px",
    textAlign: "center",
})