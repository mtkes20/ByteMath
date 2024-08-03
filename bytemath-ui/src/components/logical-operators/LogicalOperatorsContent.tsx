import SideMenu from "../content-side-menu/SideMenu";
import {SettingsInputComponent} from '@mui/icons-material';
import {Stack} from "@mui/material";
import React, {useState} from "react";
import Introduction from "./Introduction";
import BasicOperators from "./BasicOperators";
import AdvancedOperators from "./AdvancedOperators";
import TruthTables from "./TruthTables";


const LogicalOperatorsContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>(
        "introduction"
    );

    return (
        <Stack display={"flex"} flexDirection={"row"} height={'calc(1 n00vh - 70px)'} style={{
            height: "auto"
        }}>
            <SideMenu icon={<SettingsInputComponent fontSize="small"/>} title={"Logical Operands"}
                      items={[{title: "Introduction to Logical Operators", value: "introduction"},
                          {title: "Basic Logical Operators", value: "basic-operators"},
                          {title: "Advanced Logical Operators", value: "advanced-operators"},
                          {title: "Truth Tables", value: "truth-tables"},
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
        </Stack>
    )
}

export default LogicalOperatorsContent;
