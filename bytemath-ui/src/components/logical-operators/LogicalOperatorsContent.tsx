import SideMenu from "../content-side-menu/SideMenu";
import {SettingsInputComponent} from '@mui/icons-material';
import React, {useState} from "react";
import Introduction from "./Introduction";
import BasicOperators from "./BasicOperators";
import AdvancedOperators from "./AdvancedOperators";
import TruthTables from "./TruthTables";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";


const LogicalOperatorsContent = () => {
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState<string>(
        "introduction"
    );

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<SettingsInputComponent fontSize="small"/>} title={t("logicalOperands.title")}
                      items={[{title: t("logicalOperands.introduction.title"), value: "introduction"},
                          {title: t("logicalOperands.basicOperators.title"), value: "basic-operators"},
                          {title: t("logicalOperands.advancedOperators.title"), value: "advanced-operators"},
                          {title: t("logicalOperands.truthTables.title"), value: "truth-tables"},
                      ]}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {
                selectedItem === "introduction" && <Introduction/>
            }
            {
                selectedItem === "basic-operators" && <BasicOperators/>
            }
            {
                selectedItem === "advanced-operators" && <AdvancedOperators/>
            }
            {
                selectedItem === "truth-tables" && <TruthTables/>
            }
            <div/>
        </CoursePageSideMenuContainer>
    )
}

export default LogicalOperatorsContent;
