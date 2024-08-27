import SideMenu from "../content-side-menu/SideMenu";
import {SettingsInputComponent} from '@mui/icons-material';
import React, {useMemo, useState} from "react";
import Introduction from "./Introduction";
import BasicOperators from "./BasicOperators";
import AdvancedOperators from "./AdvancedOperators";
import TruthTables from "./TruthTables";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {usePage} from "../../hooks/usePage";


const LogicalOperatorsContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>("LOGICAL_OPERANDS_INTRO");
    const { readPages } = usePage(selectedItem);

    const menuItems = useMemo(() =>{
        return [
            {title: "Introduction to Logical Operators", value: "LOGICAL_OPERANDS_INTRO", read: readPages.has("LOGICAL_OPERANDS_INTRO")},
            {title: "Basic Logical Operators", value: "LOGICAL_OPERANDS_BASIC_OPERATORS", read: readPages.has("LOGICAL_OPERANDS_BASIC_OPERATORS")},
            {title: "Advanced Logical Operators", value: "LOGICAL_OPERANDS_ADVANCED_OPERATORS", read: readPages.has("LOGICAL_OPERANDS_ADVANCED_OPERATORS")},
            {title: "Truth Tables", value: "LOGICAL_OPERANDS_TRUTH_TABLES", read: readPages.has("LOGICAL_OPERANDS_TRUTH_TABLES")}
        ];
    }, [readPages])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<SettingsInputComponent fontSize="small"/>}
                      title={"Logical Operands"}
                      items={menuItems}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {
                selectedItem === "LOGICAL_OPERANDS_INTRO" && <Introduction/>
            }
            {
                selectedItem === "LOGICAL_OPERANDS_BASIC_OPERATORS" && <BasicOperators/>
            }
            {
                selectedItem === "LOGICAL_OPERANDS_ADVANCED_OPERATORS" && <AdvancedOperators/>
            }
            {
                selectedItem === "LOGICAL_OPERANDS_TRUTH_TABLES" && <TruthTables/>
            }
        </CoursePageSideMenuContainer>
    )
}

export default LogicalOperatorsContent;
