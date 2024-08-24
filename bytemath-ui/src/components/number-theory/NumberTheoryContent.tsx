import React, {useState} from "react";
import {Stack} from "@mui/material";
import SideMenu from "../content-side-menu/SideMenu";
import {Functions} from "@mui/icons-material";
import Introduction from "./Introduction";
import LCMandGCD from "./LCMandGCD";
import RSAAlgorithm from "./RSAAlgorithm";
import ModularArithmetic from "./ModularArithmetic";
import {useTranslation} from "react-i18next";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";


const NumberTheoryContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>(
        "introduction"
    );
    const { t } = useTranslation()

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<Functions fontSize="small" />}
                      title={t("numberTheoryTitle")}
                      items={[
                          {title: t("introduction"), value: "introduction"},
                          {title: t("lcm-gcd"), value: "lcm-gcd"},
                          {title: t("rsa-algorithm"), value: "rsa-algorithm"},
                          {title: t("modular-arithmetic"), value: "modular-arithmetic"}
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
            {
                selectedItem === "modular-arithmetic" && <ModularArithmetic/>
            }
            <div/>
        </CoursePageSideMenuContainer>
    )
}

export default NumberTheoryContent;