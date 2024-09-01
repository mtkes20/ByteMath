import React, {MouseEventHandler, useState} from 'react';
import {Avatar, Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import {
    AccountTree,
    Code,
    ExitToApp,
    ExpandLess,
    ExpandMore,
    Functions,
    Person,
    SettingsInputComponent
} from '@mui/icons-material';
import LoginButton from "./LoginButton";
import LanguageSwitcher from "./LanguageSwitcher";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import RegisterButton from "./RegisterButton";
import BytemathLogo from "./bytemath-logo.png";

interface NavbarProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({language, onLanguageChange}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null);
    // const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const open = Boolean(anchorEl);
    const profileMenuOpen = Boolean(profileAnchorEl);
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {isAuthenticated, keycloak, profilePicture} = useKeycloak();

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
                    <Typography variant={"inherit"} color={"#ffffff"} fontSize={18}
                                fontFamily={"Roboto"}>{t("courses")}</Typography>
                    {open ? <ExpandLess style={{color: "#ffffff"}}/> : <ExpandMore style={{color: "#ffffff"}}/>}
                </Button>
            </div>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'categories-btn'}}
            >
                <MenuItem onClick={() => onSelect('binary-system')}>
                    <ListItemIcon>
                        <Code/>
                    </ListItemIcon>
                    <ListItemText>{t("binarySystemTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('logic-operands')}>
                    <ListItemIcon>
                        <SettingsInputComponent fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>{t("logicalOperandsTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('graphs')}>
                    <ListItemIcon>
                        <AccountTree fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>{t("graphTheoryTitle")}</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('numbers-theory')}>
                    <ListItemIcon>
                        <Functions fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>{t("numberTheoryTitle")}</ListItemText>
                </MenuItem>
            </Menu>
            <img
                src={BytemathLogo}
                alt="Image"
                width="295"
                height="70"
                onClick={() => navigate("/")}
                style={{
                    color: "#ffffff",
                    fontSize: 24,
                    fontFamily: "Roboto",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
            />
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
                    <div onClick={handleProfileClick}
                         style={{cursor: "pointer", display: "flex", alignItems: "center", gap: "8px"}}>
                        <Avatar src={
                            profilePicture ? URL.createObjectURL(profilePicture) : undefined
                        } alt={keycloak?.tokenParsed?.name || "User"}/>
                    </div>
                ) : (
                    <div style={{display: "flex", gap: "8px"}}>
                        <LoginButton/>
                        <RegisterButton/>
                    </div>
                )}
                <Menu
                    anchorEl={profileAnchorEl}
                    open={profileMenuOpen}
                    onClose={handleProfileClose}
                >
                    <MenuItem onClick={() => {
                        navigate('/user');
                        handleProfileClose();
                    }}>
                        <ListItemIcon>
                            <Person fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>{keycloak?.tokenParsed?.name || ""}</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => {
                        handleLogout();
                        handleProfileClose();
                    }}>
                        <ListItemIcon>
                            <ExitToApp fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
