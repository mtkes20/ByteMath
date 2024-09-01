import React, {useEffect, useMemo, useState} from "react";
import SideMenu, {PageItem} from "../content-side-menu/SideMenu";
import {CheckCircle, Functions} from "@mui/icons-material";
import Introduction from "./Introduction";
import LCMandGCD from "./LCMandGCD";
import RSAAlgorithm from "./RSAAlgorithm";
import ModularArithmetic from "./ModularArithmetic";
import {useTranslation} from "react-i18next";
import {CoursePageSideMenuContainer} from "../utils/StyledComponents";
import {Tooltip} from "@mui/material";
import {usePage} from "../../hooks/usePage";
import {Outlet, useLocation, useNavigate} from "react-router-dom";


const NumberTheoryContent = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string | undefined>(location.pathname.split('/').pop() || '');
    const {readPages} = usePage(currentPage);

    useEffect(() => {
        if (location.pathname === "/courses/numbers-theory") {
            navigate("NUMBER_THEORY_INTRO");
            setCurrentPage("NUMBER_THEORY_INTRO")
        }
    }, [location, navigate]);

    const handleItemChange = (newItem: PageItem) => {
        if (newItem.path) {
            navigate(newItem.path);
        }
        setCurrentPage(newItem.value);
    };

    const menuItems = useMemo(() => {
        return [
            {
                title: t("introduction"),
                value: "NUMBER_THEORY_INTRO",
                read: readPages.has("NUMBER_THEORY_INTRO"),
                path: "NUMBER_THEORY_INTRO"
            },
            {
                title: t("lcm-gcd"),
                value: "NUMBER_THEORY_LCM_GCD",
                read: readPages.has("NUMBER_THEORY_LCM_GCD"),
                path: "NUMBER_THEORY_LCM_GCD"
            },
            {
                title: t("rsa-algorithm"),
                value: "NUMBER_THEORY_RSA",
                read: readPages.has("NUMBER_THEORY_RSA"),
                path: "NUMBER_THEORY_RSA"
            },
            {
                title: t("modular-arithmetic"),
                value: "NUMBER_THEORY_MODULAR_ARITHMETIC",
                read: readPages.has("NUMBER_THEORY_MODULAR_ARITHMETIC"),
                path: "NUMBER_THEORY_MODULAR_ARITHMETIC"
            }
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<Functions fontSize="small"/>}
                      title={t("numberTheoryTitle")}
                      items={menuItems}
                      selectedItem={currentPage}
                      setSelectedItem={handleItemChange}
            />
            <Outlet/>
        </CoursePageSideMenuContainer>
    )
}

export default NumberTheoryContent;
