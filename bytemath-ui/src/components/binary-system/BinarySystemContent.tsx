import React, {useEffect, useRef, useState} from "react";
import SideMenu from "../content-side-menu/SideMenu";
import {CheckCircle, Code} from '@mui/icons-material';
import {Tooltip} from "@mui/material";
import Introduction from "./Introduction";
import Converting from "./Converting";
import Arithmetic from "./Arithmetic";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {useKeycloak} from "../../context/KeycloakProvider";
import {useTranslation} from "react-i18next";
import axios from "axios";

const BinarySystemContent: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>("introduction");
    const {keycloak, isAuthenticated} = useKeycloak();
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [readPages, setReadPages] = useState<Set<string>>(new Set());
    const { t } = useTranslation()

    useEffect(() => {
        if (isAuthenticated && keycloak?.token) {
            fetchUserProgress();
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isAuthenticated, keycloak?.token]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            if (isAuthenticated && keycloak?.token) {
                markPageAsRead(selectedItem);
            }
        }, 5000);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [selectedItem, isAuthenticated, keycloak?.token]);

    const fetchUserProgress = async () => {
        if (!keycloak?.token) return;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user-progress`, {
                headers: {
                    'Authorization': `Bearer ${keycloak.token}`
                }
            });
            setReadPages(new Set(response.data.readSections || []));
            setSelectedItem(response.data.lastReadSection || 'introduction');
        } catch (error) {
            console.error('Error fetching user progress:', error);
        }
    };

    const markPageAsRead = async (pageId: string) => {
        if (!keycloak?.token) return;

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/pages/read/BINARY_SYSTEM_INTRO`, {}, {
                headers: {
                    'Authorization': `Bearer ${keycloak.token}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log('Page marked as read');
            setReadPages(prev => new Set(prev).add(pageId));
        } catch (error) {
            console.error('Error marking page as read:', error);
        }
    };

    const handleItemChange = (newItem: string) => {
        setSelectedItem(newItem);
    };

    const menuItems = [
        {title: t("introduction"), value: "introduction"},
        {title: t("converting"), value: "converting"},
        {title: t("binaryArithmetic"), value: "arithmetic"},
    ];

    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<Code/>}
                title={t("binarySystemTitle")}
                items={menuItems.map(item => ({
                    ...item,
                    icon: readPages.has(item.value) ? (
                        <Tooltip title="Page read">
                            <CheckCircle fontSize="small"/>
                        </Tooltip>
                    ) : null
                }))}
                selectedItem={selectedItem}
                setSelectedItem={handleItemChange}
            />
            {selectedItem === "introduction" && <Introduction/>}
            {selectedItem === "converting" && <Converting/>}
            {selectedItem === "arithmetic" && <Arithmetic/>}
        </CoursePageSideMenuContainer>
    );
};

export default BinarySystemContent;
