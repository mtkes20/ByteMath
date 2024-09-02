import React, {useEffect, useMemo, useState} from "react";
import SideMenu, {PageItem} from "../content-side-menu/SideMenu";
import {Code} from '@mui/icons-material';
import {CoursePageSideMenuContainer} from "../utils/StyledComponents";
import {useTranslation} from "react-i18next";
import {usePage} from "../../hooks/usePage";
import {Outlet, useLocation, useNavigate} from "react-router-dom";


const BinarySystemContent: React.FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string | undefined>(location.pathname.split('/').pop() || '');
    const { readPages } = usePage(currentPage);

    useEffect(() => {
        if (location.pathname === "/courses/binary-system") {
            navigate("BINARY_SYSTEM_INTRO");
            setCurrentPage("BINARY_SYSTEM_INTRO")
        }
    }, [location, navigate]);

    const handleItemChange = (newItem: PageItem) => {
        if (newItem.path) {
            navigate(newItem.path);
        }
        setCurrentPage(newItem.value);
    };

    const menuItems = useMemo<PageItem[]>(() => {
        return [
            {title: t("introduction"), value: "BINARY_SYSTEM_INTRO", read: readPages.has("BINARY_SYSTEM_INTRO"), path: "BINARY_SYSTEM_INTRO"},
            {title: t("binaryRepresentation"), value: "BINARY_SYSTEM_REPRESENTATION", read: readPages.has("BINARY_SYSTEM_REPRESENTATION"), path: "BINARY_SYSTEM_REPRESENTATION"},
            {title: t("converting"), value: "BINARY_SYSTEM_CONVERTING", read: readPages.has("BINARY_SYSTEM_CONVERTING"), path: "BINARY_SYSTEM_CONVERTING"},
            {title: t("binaryArithmetic"), value: "BINARY_SYSTEM_ARITHMETIC", read: readPages.has("BINARY_SYSTEM_ARITHMETIC"), path: "BINARY_SYSTEM_ARITHMETIC"},
            {title: "binary probs", path: "BINARY_SYSTEM_PROBLEMS"} //TODO translation
        ];
    }, [readPages, t])

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<Code/>}
                title={t("binarySystemTitle")}
                items={menuItems}
                selectedItem={currentPage}
                setSelectedItem={handleItemChange}
            />
            <Outlet/>
        </CoursePageSideMenuContainer>
    );
};

export default BinarySystemContent;
