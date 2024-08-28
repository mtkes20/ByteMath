import React, {useState, MouseEventHandler, useEffect} from 'react';
import {Avatar, Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import {
    AccountTree,
    Code, ExitToApp,
    ExpandLess,
    ExpandMore,
    Functions,
    Person,
    SettingsInputComponent
} from '@mui/icons-material';
import LoginButton from "./LoginButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProfilePictureApi from "../../api/profile-picture-api";
import {useKeycloak} from "../../context/KeycloakProvider";

interface NavbarProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const open = Boolean(anchorEl);
    const profileMenuOpen = Boolean(profileAnchorEl);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isAuthenticated, keycloak } = useKeycloak();

    useEffect(() => {
        const fetchProfilePicture = async () => {
            if (isAuthenticated && keycloak) {
                try {
                    console.log('Fetching profile picture...');
                    const blob = await ProfilePictureApi.getProfilePicture(keycloak.token);
                    const imageUrl = URL.createObjectURL(blob);
                    setProfilePicture(imageUrl);
                    console.log('Profile picture fetched successfully');
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                }
            }
        };
        fetchProfilePicture();
    }, [isAuthenticated, keycloak]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick: MouseEventHandler<HTMLDivElement> = (e) => {
        setProfileAnchorEl(e.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const onSelect = (course: string) => {
        navigate("courses/" + course);
    };

    const handleLogout = () => {
        keycloak?.logout()
            .then(() => {
            })
            .catch(console.error);
    };

    return (
        <div style={{
            height: "70px",
            padding: "10px 20px",
            color: "#3a3939",
            borderBottom: "1px solid",
            position: "sticky",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Button
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        textTransform: 'none',
                    }}
                >
                    <Typography variant={"inherit"} color={"#ffffff"} fontSize={18} fontFamily={"Roboto"}>{t("courses")}</Typography>
                    {open ? <ExpandLess style={{ color: "#ffffff" }} /> : <ExpandMore style={{ color: "#ffffff" }} />}
                </Button>
            </div>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'categories-btn' }}
            >
                <MenuItem onClick={() => onSelect('binary-system')}>
                    <ListItemIcon>
                        <Code />
                    </ListItemIcon>
                    <ListItemText>{t("binarySystemTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('logic-operands')}>
                    <ListItemIcon>
                        <SettingsInputComponent fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{t("logicalOperandsTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('graphs')}>
                    <ListItemIcon>
                        <AccountTree fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{t("graphTheoryTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('numbers-theory')}>
                    <ListItemIcon>
                        <Functions fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{t("numberTheoryTitle")}</ListItemText>
                </MenuItem>
            </Menu>
            <Typography
                onClick={() => {
                    navigate("/")
                }}
                style={{
                color: "#ffffff",
                fontSize: 24,
                fontFamily: "Roboto",
                flex: 2,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
            }}>{t("title")}</Typography>
            <div style={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end"
            }}>
                <LanguageSwitcher language={language} onLanguageChange={onLanguageChange}/>
                {isAuthenticated ? (
                    <div onClick={handleProfileClick} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <Avatar src={profilePicture || undefined} alt={keycloak?.tokenParsed?.name || "User"} />
                    </div>
                ) : (
                    <LoginButton />
                )}
                <Menu
                    anchorEl={profileAnchorEl}
                    open={profileMenuOpen}
                    onClose={handleProfileClose}
                >
                    <MenuItem onClick={() => { navigate('/user'); handleProfileClose(); }}>
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>{keycloak?.tokenParsed?.name || ""}</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => { handleLogout(); handleProfileClose(); }}>
                        <ListItemIcon>
                            <ExitToApp fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
