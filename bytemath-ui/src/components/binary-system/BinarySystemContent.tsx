import React, {useMemo, useState} from "react";
import SideMenu from "../content-side-menu/SideMenu";
import {Code} from '@mui/icons-material';
import Introduction from "./Introduction";
import Converting from "./Converting";
import Arithmetic from "./Arithmetic";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import {usePage} from "../../hooks/usePage";

const BinarySystemContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>("BINARY_SYSTEM_INTRO");
    const { t } = useTranslation()
    const { readPages } = usePage(currentPage);

    const handleItemChange = (newItem: string) => {
        setCurrentPage(newItem);
    };

    const menuItems = useMemo(() =>{
        return [
            {title: t("introduction"), value: "BINARY_SYSTEM_INTRO", read: readPages.has("BINARY_SYSTEM_INTRO")},
            {title: t("converting"), value: "BINARY_SYSTEM_CONVERTING", read: readPages.has("BINARY_SYSTEM_CONVERTING")},
            {title: t("binaryArithmetic"), value: "BINARY_SYSTEM_ARITHMETIC", read: readPages.has("BINARY_SYSTEM_ARITHMETIC")},
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
            {currentPage === "BINARY_SYSTEM_INTRO" && <Introduction/>}
            {currentPage === "BINARY_SYSTEM_CONVERTING" && <Converting/>}
            {currentPage === "BINARY_SYSTEM_ARITHMETIC" && <Arithmetic/>}
        </CoursePageSideMenuContainer>
    );
};

export default BinarySystemContent;
