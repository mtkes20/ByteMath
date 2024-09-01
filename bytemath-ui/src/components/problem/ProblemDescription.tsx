import React from "react";
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledText,
    SubContent,
    Subtitle,
    Title,
    Example
} from "../utils/StyledComponents";
import {ProblemType} from "../../types/ProblemType";
import {useTranslation} from "react-i18next";

const ProblemDescription = ({problem}: { problem: ProblemType }) => {
    const {t} = useTranslation();

    return (
        <Grid
            style={{
                padding: "20px",
                height: "100%",
                overflowY: "auto"
            }}
            item xs={12} md={6}>
            <SubContent>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px"
                }}>
                    <Title>{problem.title}</Title>
                    {problem.isCompleted && (
                        <Subtitle style={{color: "green"}}>{t("completed")}</Subtitle>
                    )}
                </div>

                <Section title={t('problems.description')} content={problem.description}/>
                <Section title={t('problems.task')} content={problem.task}/>
                <Section title={t('problems.inputFormat')} content={problem.inputFormat}/>
                <Section title={t('problems.outputFormat')} content={problem.outputFormat}/>

                <Subtitle>{t('problems.example')}</Subtitle>
                <Example>
                    <div style={{
                        fontFamily: 'monospace',
                        whiteSpace: 'pre',
                        padding: '10px',
                        borderRadius: '5px',
                        textWrap: 'wrap',
                    }}>
                        {problem.example}
                    </div>
                </Example>

                {problem.note && (
                    <Section
                        title={t('problems.note')}
                        content={problem.note}
                        ContentComponent={StyledExplanation}
                    />
                )}
            </SubContent>
        </Grid>
    );
};

const Section = ({
                     title,
                     content,
                     ContentComponent = StyledText
                 }: {
    title: string;
    content: string;
    ContentComponent?: React.ElementType;
}) => (
    <>
        <Subtitle>{title}</Subtitle>
        <ContentComponent>{content}</ContentComponent>
    </>
);

export default ProblemDescription;