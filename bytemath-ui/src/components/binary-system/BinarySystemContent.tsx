import SideMenu from "../content-side-menu/SideMenu";
import {CheckCircle, Code} from '@mui/icons-material';
import {Tooltip} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import Introduction from "./Introduction";
import Converting from "./Converting";
import Arithmetic from "./Arithmetic";
import axios from "axios";
import {CoursePageSideMenuContainer} from "../styles/StyledComponents";
import {useKeycloak} from "../../context/KeycloakProvider";


const BinarySystemContent = () => {
    const [selectedItem, setSelectedItem] = useState<string>("introduction");
    const { keycloak } = useKeycloak();
    const userId = keycloak?.tokenParsed?.sub;
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [readPages, setReadPages] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (userId) {
            console.log(userId);
            fetchUserProgress();
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [userId]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setReadPages(prev => new Set(prev).add(selectedItem));
            if (userId) {
                saveUserProgress();
            }
        }, 5000); // 30 seconds timer
    }, [selectedItem]);

    const fetchUserProgress = async () => {
        try {
            const response = await axios.get(`/api/user-progress/${userId}`);
            setReadPages(new Set(response.data.readSections || []));
            setSelectedItem(response.data.lastReadSection || 'introduction');
        } catch (error) {
            console.error('Error fetching user progress:', error);
        }
    };

    const saveUserProgress = async () => {
        try {
            await axios.post('/api/user-progress', {
                userId,
                lastReadSection: selectedItem,
                readSections: Array.from(readPages).concat(selectedItem)
            });
            console.log('User progress saved');
        } catch (error) {
            console.error('Error saving user progress:', error);
        }
    };

    const handleItemChange = (newItem: string) => {
        setSelectedItem(newItem);
    };
    const menuItems = [
        {title: "Introduction", value: "introduction"},
        {title: "Converting", value: "converting"},
        {title: "Binary Arithmetic", value: "arithmetic"},
    ];
    return (
        <CoursePageSideMenuContainer>
            <SideMenu
                icon={<Code/>}
                title={"Binary System"}
                items={menuItems.map(item => ({
                    ...item,
                    icon: readPages.has(item.value) ? (
                        <Tooltip title="Page read">
                            <CheckCircle fontSize="small" />
                        </Tooltip>
                    ) : null
                }))}
                selectedItem={selectedItem}
                setSelectedItem={handleItemChange}
            />
            {selectedItem === "introduction" && <Introduction />}
            {selectedItem === "converting" && <Converting />}
            {selectedItem === "arithmetic" && <Arithmetic />}
        </CoursePageSideMenuContainer>
    );
};
export default BinarySystemContent;
