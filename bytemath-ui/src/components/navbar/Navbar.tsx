import React, { useState, MouseEventHandler } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { AccountTree, Code, ExpandLess, ExpandMore, Functions, SettingsInputComponent } from '@mui/icons-material';
import LoginButton from "./LoginButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        const target = e.currentTarget as HTMLElement;
        setAnchorEl(target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSelect = (course: string) => {
        navigate("courses/" + course);
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
                <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
                <LoginButton />
            </div>
        </div>
    );
}

export default Navbar;
