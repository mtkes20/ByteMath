import React, { useState, MouseEventHandler } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { AccountTree, Code, ExpandLess, ExpandMore, Functions, SettingsInputComponent } from '@mui/icons-material';
import LoginButton from "./LoginButton";
import LanguageSwitcher from "./LanguageSwitcher";
import {useNavigate} from "react-router-dom";

interface NavbarProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

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
            <Button
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ textTransform: 'none' }}
            >
                <Typography variant={"inherit"} color={"#ffffff"} fontSize={18} fontFamily={"Roboto"}>Courses</Typography>
                {open ? <ExpandLess style={{ color: "#ffffff" }} /> : <ExpandMore style={{ color: "#ffffff" }} />}
            </Button>
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
                    <ListItemText>Binary System</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('logic-operands')}>
                    <ListItemIcon>
                        <SettingsInputComponent fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logic Operands</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('graphs')}>
                    <ListItemIcon>
                        <AccountTree fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Theory of Graphs</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('numbers-theory')}>
                    <ListItemIcon>
                        <Functions fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Theory of Numbers</ListItemText>
                </MenuItem>
            </Menu>
            <Typography style={{
                color: "#ffffff",
                fontSize: 24,
                fontFamily: "Roboto",
            }}>Math for Computer Science</Typography>
            <div style={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
                <LoginButton />
            </div>
        </div>
    );
}

export default Navbar;
