import React, {useMemo, useState} from "react";
import SideMenu from "../content-side-menu/SideMenu";
import {CheckCircle, Functions} from "@mui/icons-material";
import Introduction from "./Introduction";
import LCMandGCD from "./LCMandGCD";
import RSAAlgorithm from "./RSAAlgorithm";
import ModularArithmetic from "./ModularArithmetic";
import {useTranslation} from "react-i18next";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {Tooltip} from "@mui/material";
import {usePage} from "../../hooks/usePage";


const NumberTheoryContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>("NUMBER_THEORY_INTRO");
    const {t} = useTranslation()
    const {readPages} = usePage(selectedItem);

    const menuItems = useMemo(() => {
        return [
            {title: t("introduction"), value: "NUMBER_THEORY_INTRO", read: readPages.has("NUMBER_THEORY_INTRO")},
            {title: t("lcm-gcd"), value: "NUMBER_THEORY_LCM_GCD", read: readPages.has("NUMBER_THEORY_LCM_GCD")},
            {title: t("rsa-algorithm"), value: "NUMBER_THEORY_RSA", read: readPages.has("NUMBER_THEORY_RSA")},
            {
                title: t("modular-arithmetic"),
                value: "NUMBER_THEORY_MODULAR_ARITHMETIC",
                read: readPages.has("NUMBER_THEORY_MODULAR_ARITHMETIC")
            }
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<Functions fontSize="small"/>}
                      title={t("numberTheoryTitle")}
                      items={menuItems}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
            />
            {selectedItem === "NUMBER_THEORY_INTRO" && <Introduction/>}
            {selectedItem === "NUMBER_THEORY_LCM_GCD" && <LCMandGCD/>}
            {selectedItem === "NUMBER_THEORY_RSA" && <RSAAlgorithm/>}
            {selectedItem === "NUMBER_THEORY_MODULAR_ARITHMETIC" && <ModularArithmetic/>}
        </CoursePageSideMenuContainer>
    )
}

export default NumberTheoryContent;