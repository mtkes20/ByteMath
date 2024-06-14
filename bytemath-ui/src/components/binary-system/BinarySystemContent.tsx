import SideMenu from "../content-side-menu/SideMenu";
import {Code} from '@mui/icons-material';
import {Stack} from "@mui/material";
import {useState} from "react";
import Introduction from "./Introduction";
import Converting from "./Converting";
import Arithmetic from "./Arithmetic";


const BinarySystemContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>(
        "converting"
    );

    return (
        <Stack display={"flex"} flexDirection={"row"} height={"100%"}>
            <SideMenu icon={<Code/>} title={"Binary System"}
                      items={[{title: "Introduction", value: "introduction"},
                          {title: "Converting", value: "converting"},
                          {title: "Binary Arithmetic", value: "arithmetic"},]}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {
                selectedItem === "introduction" && <Introduction/>
            }
            {
                selectedItem === "converting" && <Converting/>
            }
            {
                selectedItem === "arithmetic" && <Arithmetic/>
            }
            <div/>
        </Stack>
    )
}

export default BinarySystemContent;
