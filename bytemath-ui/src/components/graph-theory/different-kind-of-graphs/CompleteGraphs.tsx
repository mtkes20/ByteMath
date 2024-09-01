import React, {useCallback, useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape';
import {Box, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    StyledButton,
    StyledCard,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const CompleteGraphs: React.FC = () => {
    const {t} = useTranslation();
    const graph = useRef<HTMLDivElement>(null);
    const [cy, setCy] = useState<cytoscape.Core | null>(null);
    const [nodeNum, setNodeNum] = useState(6);

    const generateCompleteGraph = useCallback((n: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: `${i}`}
        }));
        const edges = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                edges.push({
                    data: {id: `${i}${j}`, source: `${i}`, target: `${j}`}
                });
            }
        }
        return [...nodes, ...edges];
    }, []);

    useEffect(() => {
        if (graph.current && !cy) {
            const newCy = cytoscape({
                container: graph.current,
                elements: generateCompleteGraph(nodeNum),
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#3a55bd',
                            'label': 'data(id)',
                            'color': 'white',
                            'text-valign': 'center',
                            'width': 40,
                            'height': 40,
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 3,
                            'line-color': 'white',
                            'curve-style': 'bezier'
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });
            setCy(newCy);
        }
    }, [graph, cy, nodeNum, generateCompleteGraph]);

    useEffect(() => {
        if (cy) {
            cy.elements().remove();
            cy.add(generateCompleteGraph(nodeNum));
            cy.layout({name: 'circle'}).run();
        }
    }, [cy, nodeNum, generateCompleteGraph]);

    const handleNodeNumChange = (diff: number) => {
        setNodeNum(prev => Math.max(2, Math.min(10, prev + diff)));
    };

    const calculateEdgeNum = (nodeNum: number) => (nodeNum * (nodeNum - 1)) / 2;

    const NodeView: React.FC<{ num: number }> = ({num}) => (
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
            {Array.from({length: num}).map((_, index) => (
                <React.Fragment key={index}>
                    <Box
                        width={20}
                        height={20}
                        borderRadius="50%"
                        bgcolor="#3a55bd"
                        mx={1}
                    />
                </React.Fragment>
            ))}
        </Box>
    );

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.differentGraphs.completeGraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.completeGraphs.description')}
                </StyledText>
                <StyledGraphContainer ref={graph} style={{height: '400px', border: '1px solid #ccc'}}/>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.completeGraphs.interactionPrompt')}
                </StyledInteractionPrompt>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.differentGraphs.completeGraphs.numberOfVertices')}: {nodeNum}</StyledText>
                        <NodeView num={nodeNum}/>
                        <Box display="flex" justifyContent="center" gap={2}>
                            <StyledButton onClick={() => handleNodeNumChange(-1)} disabled={nodeNum <= 2}>
                                <RemoveIcon/>
                            </StyledButton>
                            <StyledButton onClick={() => handleNodeNumChange(1)} disabled={nodeNum >= 10}>
                                <AddIcon/>
                            </StyledButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledText>
                            {t('graphTheory.differentGraphs.completeGraphs.edgeCount', {num: calculateEdgeNum(nodeNum)})}
                        </StyledText>
                        <StyledText>
                            {t('graphTheory.differentGraphs.completeGraphs.degreeProp', {degree: nodeNum - 1})}
                        </StyledText>
                    </Grid>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default CompleteGraphs;
