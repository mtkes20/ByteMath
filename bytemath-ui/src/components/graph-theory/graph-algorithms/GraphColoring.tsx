import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Stylesheet} from 'cytoscape';
import {Grid, Paper, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {
    Example,
    StyledButton,
    StyledCard,
    StyledGraphContainer, StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const generateColor = (index: number): string => {
    const hue = (index * 137.508) % 360;
    return `hsl(${hue}, 50%, 75%)`;
};

const commonStyles: Stylesheet[] = [
    {
        selector: 'node',
        style: {
            'label': 'data(id)',
            'color': '#000000',
            'text-valign': 'center',
            'font-size': '18px',
            'font-weight': 'bold',
            'width': 50,
            'height': 50,
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': 'white',
            'curve-style': 'bezier',
        }
    },
];

const exampleElements = [
    {data: {id: 'A'}}, {data: {id: 'B'}}, {data: {id: 'C'}}, {data: {id: 'D'}},
    {data: {id: 'E'}}, {data: {id: 'F'}}, {data: {id: 'G'}}, {data: {id: 'H'}},
    {data: {id: 'I'}}, {data: {id: 'J'}}, {data: {id: 'K'}}, {data: {id: 'L'}},

    {data: {source: 'A', target: 'B'}},
    {data: {source: 'A', target: 'C'}},
    {data: {source: 'B', target: 'D'}},
    {data: {source: 'C', target: 'D'}},
    {data: {source: 'D', target: 'E'}},
    {data: {source: 'E', target: 'F'}},
    {data: {source: 'F', target: 'G'}},
    {data: {source: 'G', target: 'H'}},
    {data: {source: 'H', target: 'I'}},
    {data: {source: 'I', target: 'J'}},
    {data: {source: 'J', target: 'K'}},
    {data: {source: 'K', target: 'L'}},
    {data: {source: 'L', target: 'A'}},

    {data: {source: 'A', target: 'D'}},
    {data: {source: 'B', target: 'E'}},
    {data: {source: 'C', target: 'F'}},
    {data: {source: 'D', target: 'G'}},
    {data: {source: 'E', target: 'H'}},
    {data: {source: 'F', target: 'I'}},
    {data: {source: 'G', target: 'J'}},
    {data: {source: 'H', target: 'K'}},
    {data: {source: 'I', target: 'L'}},
    {data: {source: 'J', target: 'A'}},
    {data: {source: 'J', target: 'D'}},
];


const GraphColoring: React.FC = () => {
    const {t} = useTranslation();
    const exampleGraphRef = useRef<HTMLDivElement>(null);
    const userGraphRef = useRef<HTMLDivElement>(null);
    const [exampleCy, setExampleCy] = useState<cytoscape.Core | null>(null);
    const [userCy, setUserCy] = useState<cytoscape.Core | null>(null);
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
    const [coloringComplete, setColoringComplete] = useState(false);
    const [usedColors, setUsedColors] = useState(0);

    useEffect(() => {
        if (exampleGraphRef.current && !exampleCy) {
            const newCy = cytoscape({
                container: exampleGraphRef.current,
                elements: exampleElements,
                style: commonStyles,
                layout: {name: 'circle'},
                userZoomingEnabled: false,
                userPanningEnabled: false,
            });
            setExampleCy(newCy);
            colorGraph(newCy);
        }

        if (userGraphRef.current && !userCy) {
            const newCy = cytoscape({
                container: userGraphRef.current,
                elements: [],
                style: commonStyles,
                layout: {name: 'grid'},
                userZoomingEnabled: false,
                userPanningEnabled: false,
            });
            setUserCy(newCy);
            setupGraphInteractions(newCy);
        }
    }, []);

    const setupGraphInteractions = (cy: cytoscape.Core) => {
        cy.on('tap', (event) => {
            if (event.target === cy) {
                const position = event.position;
                const id = `${cy.nodes().length + 1}`;
                cy.add({
                    data: {id},
                    position
                });
            } else if (event.target.isNode()) {
                const nodeId = event.target.id();
                setSelectedNodes(prev => {
                    const newSelected = [...prev, nodeId];
                    if (newSelected.length === 2) {
                        if (newSelected[0] !== newSelected[1]) {
                            cy.add({
                                group: 'edges',
                                data: {source: newSelected[0], target: newSelected[1]}
                            });
                        }
                        return [];
                    } else {
                        return newSelected;
                    }
                });
            }
        });
    };

    const colorGraph = (cy: cytoscape.Core | null) => {
        if (!cy) return;

        const nodes = cy.nodes();
        nodes.forEach(node => {
            node.removeStyle('background-color');
        });

        const colored: { [key: string]: number } = {};
        let maxColorUsed = -1;

        nodes.forEach(node => {
            const usedColors = new Set();
            node.neighborhood('node').forEach(neighbor => {
                if (colored[neighbor.id()] !== undefined) {
                    usedColors.add(colored[neighbor.id()]);
                }
            });

            let color = 0;
            while (usedColors.has(color)) {
                color++;
            }

            colored[node.id()] = color;
            node.style('background-color', generateColor(color));
            maxColorUsed = Math.max(maxColorUsed, color);
        });

        setUsedColors(maxColorUsed + 1);
        setColoringComplete(true);
    };

    const resetGraph = (cy: cytoscape.Core | null) => {
        if (cy) {
            cy.elements().remove();
            setSelectedNodes([]);
            setColoringComplete(false);
            setUsedColors(0);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphAlgorithms.graphColoring.title')}</Subtitle>
            <StyledCard>
                <StyledText>{t('graphTheory.graphAlgorithms.graphColoring.introduction')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.graphColoring.definitionTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.graphColoring.definition')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.graphColoring.algorithmTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.graphColoring.algorithm')}<br/><br/></StyledText>

                <Example>{t('graphTheory.graphAlgorithms.graphColoring.exampleDescription')}</Example>

                <StyledGraphContainer ref={exampleGraphRef} style={{height: '400px'}}/>

                <StyledText>{t('graphTheory.graphAlgorithms.graphColoring.exampleExplanation')}<br/><br/></StyledText>

                <StyledInteractionPrompt>{t('graphTheory.graphAlgorithms.graphColoring.interactiveDescription')}</StyledInteractionPrompt>

                <StyledGraphContainer ref={userGraphRef} style={{height: '400px'}}/>

                <Grid container spacing={3} justifyContent="center" style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Grid item>
                        <StyledButton onClick={() => colorGraph(userCy)}>
                            <PlayArrowIcon/>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={() => resetGraph(userCy)}>
                            <DeleteIcon/>
                        </StyledButton>
                    </Grid>
                </Grid>

                {coloringComplete && (
                    <Paper elevation={3} style={{padding: '15px', marginTop: '20px', backgroundColor: '#f0f8ff'}}>
                        <Typography variant="h6" gutterBottom>
                            <InfoIcon style={{verticalAlign: 'middle', marginRight: '10px'}}/>
                            {t('graphTheory.graphAlgorithms.graphColoring.resultTitle')}
                        </Typography>
                        <Typography>
                            {t('graphTheory.graphAlgorithms.graphColoring.resultDescription')}
                        </Typography>
                        <Typography style={{marginTop: '10px'}}>
                            {t('graphTheory.graphAlgorithms.graphColoring.usedColors', {count: usedColors})}
                        </Typography>
                    </Paper>
                )}
            </StyledCard>
        </SubContent>
    );
};

export default GraphColoring;
