import React, {useMemo, useState} from "react";
import SideMenu from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./introduction/Introduction";
import {useTranslation} from 'react-i18next';
import DifferentGraphs from "./different-kind-of-graphs/DifferentGraphs";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import GraphTraversals from "./graph-traversals/GraphTraversals";
import GraphAlgorithms from "./graph-algorithms/GraphAlgorithms";
import {usePage} from "../../hooks/usePage";
import GraphTheoryProblems from "./graph-problems/GraphTheoryProblems";

const TheoryOfGraphsContent: React.FC = () => {
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState<string>("GRAPH_THEORY_INTRO");
    const {readPages} = usePage(selectedItem);

    const menuItems = useMemo(() => {
        return [
            {title: t('introduction'), value: "GRAPH_THEORY_INTRO", read: readPages.has("GRAPH_THEORY_INTRO")},
            {title: t('graphTheory.differentGraphs.title'), value: "GRAPH_THEORY_DIFFERENT_GRAPHS", read: readPages.has("GRAPH_THEORY_DIFFERENT_GRAPHS")},
            {title: t('graphTheory.graphTraversals.title'), value: "GRAPH_THEORY_GRAPH_TRAVERSALS", read: readPages.has("GRAPH_THEORY_GRAPH_TRAVERSALS")},
            {title: t('graphTheory.graphAlgorithms.title'), value: "GRAPH_THEORY_ALGORITHMS", read: readPages.has("GRAPH_THEORY_ALGORITHMS")},
            {title: t('graphTheory.graphProblems.title'), value: "GRAPH_THEORY_PROBLEMS", read: readPages.has("GRAPH_THEORY_PROBLEMS")}
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<AccountTree fontSize="small"/>}
                title={t('graphTheoryTitle')}
                items={menuItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            {selectedItem === "GRAPH_THEORY_INTRO" && <Introduction/>}
            {selectedItem === "GRAPH_THEORY_DIFFERENT_GRAPHS" && <DifferentGraphs/>}
            {selectedItem === "GRAPH_THEORY_GRAPH_TRAVERSALS" && <GraphTraversals/>}
            {selectedItem === "GRAPH_THEORY_ALGORITHMS" && <GraphAlgorithms/>}
            {selectedItem === "GRAPH_THEORY_PROBLEMS" && <GraphTheoryProblems/>}
        </CoursePageSideMenuContainer>
    );
}

export default TheoryOfGraphsContent;
