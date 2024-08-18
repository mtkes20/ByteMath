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
} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";

const RegularGraphs: React.FC = () => {
    const {t} = useTranslation();
    const graph = useRef<HTMLDivElement>(null);
    const [cy, setCy] = useState<cytoscape.Core | null>(null);
    const [nodeNum, setNodeNum] = useState(6);
    const [degree, setDegree] = useState(2);

    const generateRegularGraph = useCallback((n: number, k: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: `${i}`}
        }));

        const edges = [];
        for (let i = 0; i < n; i++) {
            for (let j = 1; j <= Math.floor(k / 2); j++) {
                const target = (i + j) % n;
                edges.push({
                    data: {
                        id: `${i}${target}`,
                        source: `${i}`,
                        target: `${target}`
                    }
                });
            }
            if (k % 2 !== 0 && n % 2 === 0) {
                const target = (i + n / 2) % n;
                if (i < target) {
                    edges.push({
                        data: {
                            id: `${i}${target}`,
                            source: `${i}`,
                            target: `${target}`
                        }
                    });
                }
            }
        }

        return [...nodes, ...edges];
    }, []);

    useEffect(() => {
        if (graph.current && !cy) {
            const newCy = cytoscape({
                container: graph.current,
                elements: generateRegularGraph(nodeNum, degree),
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
    }, [graph, cy, nodeNum, degree, generateRegularGraph]);

    useEffect(() => {
        if (cy) {
            cy.elements().remove();
            cy.add(generateRegularGraph(nodeNum, degree));
            cy.layout({name: 'circle'}).run();
        }
    }, [cy, nodeNum, degree, generateRegularGraph]);

    const isValidRegularGraph = (n: number, k: number) => {
        return k >= 0 && k < n && (k * n) % 2 === 0;
    };

    const handleNodeNumChange = (diff: number) => {
        setNodeNum(prev => {
            const newCount = Math.max(3, Math.min(15, prev + diff));
            if (!isValidRegularGraph(newCount, degree)) {
                setDegree(2);
            }
            return newCount;
        });
    };

    const handleDegreeChange = (diff: number) => {
        setDegree(prev => {
            let newDegree = prev + diff;
            while (!isValidRegularGraph(nodeNum, newDegree) && newDegree >= 2 && newDegree < nodeNum) {
                newDegree += diff;
            }
            if (isValidRegularGraph(nodeNum, newDegree)) {
                return newDegree;
            }
            return prev;
        });
    };

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

    const EdgeView: React.FC<{ num: number }> = ({num}) => (
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
            {Array.from({length: num}).map((_, index) => (
                <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    mx={1}
                >
                    <Box
                        width={40}
                        height={3}
                        bgcolor="#ffffff"
                    />
                </Box>
            ))}
        </Box>
    );

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.differentGraphs.regularGraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.regularGraphs.description')}
                </StyledText>
                <StyledText>
                    {t('graphTheory.differentGraphs.regularGraphs.oddEvenDescription')}
                </StyledText>
                <StyledGraphContainer ref={graph} style={{height: '400px', border: '1px solid #ccc'}}/>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.regularGraphs.interactionPrompt')}
                </StyledInteractionPrompt>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.differentGraphs.regularGraphs.numberOfVertices')}: {nodeNum}</StyledText>
                        <NodeView num={nodeNum}/>
                        <Box display="flex" justifyContent="center" gap={2}>
                            <StyledButton onClick={() => handleNodeNumChange(-1)} disabled={nodeNum <= 3}>
                                <RemoveIcon/>
                            </StyledButton>
                            <StyledButton onClick={() => handleNodeNumChange(1)} disabled={nodeNum >= 15}>
                                <AddIcon/>
                            </StyledButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.differentGraphs.regularGraphs.degree')}: {degree}</StyledText>
                        <EdgeView num={degree}/>
                        <Box display="flex" justifyContent="center" gap={2}>
                            <StyledButton onClick={() => handleDegreeChange(-1)} disabled={degree <= 2}>
                                <RemoveIcon/>
                            </StyledButton>
                            <StyledButton onClick={() => handleDegreeChange(1)} disabled={degree >= nodeNum - 1}>
                                <AddIcon/>
                            </StyledButton>
                        </Box>
                    </Grid>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default RegularGraphs;
