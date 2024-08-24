import React, {useState} from "react";
import {Stack} from "@mui/material";
import SideMenu from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./introduction/Introduction";
import {useTranslation} from 'react-i18next';
import DifferentGraphs from "./different-kind-of-graphs/DifferentGraphs";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";

const TheoryOfGraphsContent: React.FC = () => {
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState<string>("introduction");

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<AccountTree fontSize="small"/>}
                title={t('graphTheoryTitle')}
                items={[{title: t('introduction'), value: "introduction"},
                    {title: t('graphTheory.differentGraphs.title'), value: "differentGraphs"}]}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            {selectedItem === "introduction" && <Introduction/>}
            {selectedItem === "differentGraphs" && <DifferentGraphs/>}
            <div/>
        </CoursePageSideMenuContainer>
    );
}

export default TheoryOfGraphsContent;
