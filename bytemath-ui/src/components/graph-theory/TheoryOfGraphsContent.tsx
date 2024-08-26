import React, {useState} from "react";
import SideMenu from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./introduction/Introduction";
import {useTranslation} from 'react-i18next';
import DifferentGraphs from "./different-kind-of-graphs/DifferentGraphs";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import GraphTraversals from "./graph-traversals/GraphTraversals";

const TheoryOfGraphsContent: React.FC = () => {
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState<string>("introduction");

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<AccountTree fontSize="small"/>}
                title={t('graphTheoryTitle')}
                items={[{title: t('introduction'), value: "introduction"},
                    {title: t('graphTheory.differentGraphs.title'), value: "differentGraphs"},
                    {title: t('graphTheory.graphTraversals.title'), value: "graphTraversals"}]}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            {selectedItem === "introduction" && <Introduction/>}
            {selectedItem === "differentGraphs" && <DifferentGraphs/>}
            {selectedItem === "graphTraversals" && <GraphTraversals/>}
            <div/>
        </CoursePageSideMenuContainer>
    );
}

export default TheoryOfGraphsContent;
