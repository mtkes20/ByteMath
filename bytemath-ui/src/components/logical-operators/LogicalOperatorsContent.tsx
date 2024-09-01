import SideMenu, {PageItem} from "../content-side-menu/SideMenu";
import {SettingsInputComponent} from '@mui/icons-material';
import React, {useEffect, useMemo, useState} from "react";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import {usePage} from "../../hooks/usePage";
import {Outlet, useLocation, useNavigate} from "react-router-dom";


const LogicalOperatorsContent = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>(location.pathname.split('/').pop() || '');
    const { readPages } = usePage(currentPage);

    useEffect(() => {
        if (location.pathname === "/courses/logic-operands") {
            navigate("LOGICAL_OPERANDS_INTRO");
            setCurrentPage("LOGICAL_OPERANDS_INTRO")
        }
    }, [location, navigate]);

    const handleItemChange = (newItem: PageItem) => {
        if (newItem.path) {
            navigate(newItem.path);
        }
        setCurrentPage(newItem.value);
    };

    const menuItems = useMemo(() =>{
        return [
            {title: t("logicalOperands.introduction.title"), value: "LOGICAL_OPERANDS_INTRO", read: readPages.has("LOGICAL_OPERANDS_INTRO"), path: "LOGICAL_OPERANDS_INTRO"},
            {title: t("logicalOperands.basicOperators.title"), value: "LOGICAL_OPERANDS_BASIC_OPERATORS", read: readPages.has("LOGICAL_OPERANDS_BASIC_OPERATORS"), path: "LOGICAL_OPERANDS_BASIC_OPERATORS"},
            {title: t("logicalOperands.advancedOperators.title"), value: "LOGICAL_OPERANDS_ADVANCED_OPERATORS", read: readPages.has("LOGICAL_OPERANDS_ADVANCED_OPERATORS"), path: "LOGICAL_OPERANDS_ADVANCED_OPERATORS"},
            {title: t("logicalOperands.problems.title"), value: "LOGICAL_OPERANDS_PROBLEMS", read: readPages.has("LOGICAL_OPERANDS_PROBLEMS"), path: "LOGICAL_OPERANDS_PROBLEMS"},
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu icon={<SettingsInputComponent fontSize="small"/>}
                      title={t("logicalOperands.title")}
                      items={menuItems}
                      selectedItem={currentPage}
                      setSelectedItem={handleItemChange}
            />
            <Outlet/>
        </CoursePageSideMenuContainer>
    )
}

export default LogicalOperatorsContent;
