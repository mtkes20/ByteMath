import React, {useEffect, useMemo, useState} from "react";
import SideMenu, {PageItem} from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./introduction/Introduction";
import {useTranslation} from 'react-i18next';
import DifferentGraphs from "./different-kind-of-graphs/DifferentGraphs";
import {CoursePageSideMenuContainer} from "../utils/StyledComponents";
import GraphTraversals from "./graph-traversals/GraphTraversals";
import GraphAlgorithms from "./graph-algorithms/GraphAlgorithms";
import {usePage} from "../../hooks/usePage";
import GraphTheoryProblems from "./graph-problems/GraphTheoryProblems";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const TheoryOfGraphsContent: React.FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>(location.pathname.split('/').pop() || '');
    const { readPages } = usePage(currentPage);

    useEffect(() => {
        if (location.pathname === "/courses/graphs") {
            navigate("GRAPH_THEORY_INTRO");
            setCurrentPage("GRAPH_THEORY_INTRO")
        }
    }, [location, navigate]);

    const handleItemChange = (newItem: PageItem) => {
        if (newItem.path) {
            navigate(newItem.path);
        }
        setCurrentPage(newItem.value);
    };

    const menuItems = useMemo(() => {
        return [
            {title: t('introduction'), value: "GRAPH_THEORY_INTRO", read: readPages.has("GRAPH_THEORY_INTRO"), path: "GRAPH_THEORY_INTRO"},
            {title: t('graphTheory.differentGraphs.title'), value: "GRAPH_THEORY_DIFFERENT_GRAPHS", read: readPages.has("GRAPH_THEORY_DIFFERENT_GRAPHS"), path: "GRAPH_THEORY_DIFFERENT_GRAPHS"},
            {title: t('graphTheory.graphTraversals.title'), value: "GRAPH_THEORY_GRAPH_TRAVERSALS", read: readPages.has("GRAPH_THEORY_GRAPH_TRAVERSALS"), path: "GRAPH_THEORY_GRAPH_TRAVERSALS"},
            {title: t('graphTheory.graphAlgorithms.title'), value: "GRAPH_THEORY_ALGORITHMS", read: readPages.has("GRAPH_THEORY_ALGORITHMS"), path: "GRAPH_THEORY_ALGORITHMS"},
            {title: t('graphTheory.graphProblems.title'), value: "GRAPH_THEORY_PROBLEMS", read: readPages.has("GRAPH_THEORY_PROBLEMS"), path: "GRAPH_THEORY_PROBLEMS"}
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<AccountTree fontSize="small"/>}
                title={t('graphTheoryTitle')}
                items={menuItems}
                selectedItem={currentPage}
                setSelectedItem={handleItemChange}
            />
            <Outlet/>
        </CoursePageSideMenuContainer>
    );
}

export default TheoryOfGraphsContent;
