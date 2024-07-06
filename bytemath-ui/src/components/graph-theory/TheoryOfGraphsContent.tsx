import React, {useState} from "react";
import {Stack} from "@mui/material";
import SideMenu from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./Introduction";

const TheoryOfGraphsContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>(
        "introduction"
    );

    return (

        <Stack display={"flex"} flexDirection={"row"} height={'calc(1 n00vh - 70px)'} style={{
            height: "auto"
        }}>
            <SideMenu icon={<AccountTree fontSize="small"/>} title={"Theory of Graphs"}
                      items={[{title: "Introduction to Theory of Graphs", value: "introduction"}
                      ]}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {
                selectedItem === "introduction" && <Introduction/>
            }
            <div/>
        </Stack>
    )
}

export default TheoryOfGraphsContent;
