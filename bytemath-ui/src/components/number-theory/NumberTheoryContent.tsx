import React, {useState} from "react";
import {Stack} from "@mui/material";
import SideMenu from "../content-side-menu/SideMenu";
import {Functions} from "@mui/icons-material";
import Introduction from "./Introduction";
import LCMandGCD from "./LCMandGCD";
import RSAAlgorithm from "./RSAAlgorithm";


const NumberTheoryContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>(
        "introduction"
    );

    return (
        <Stack
            display={"flex"}
            flexDirection={"row"}
            height={'calc(100vh - 70px)'}
            style={{
                height: "auto"
            }}
        >
            <SideMenu icon={<Functions fontSize="small" />}
                      title={"Theory of Numbers"}
                      items={[
                          {title: "Introduction", value: "introduction"},
                          {title: "LCM and GCD", value: "lcm-gcd"},
                          {title: "RSA Algorithm", value: "rsa-algorithm"}
                      ]}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {
                selectedItem === "introduction" && <Introduction/>
            }
            {
                selectedItem === "lcm-gcd" && <LCMandGCD/>
            }
            {
                selectedItem === "rsa-algorithm" && <RSAAlgorithm/>
            }
            <div/>
        </Stack>
    )
}

export default NumberTheoryContent;