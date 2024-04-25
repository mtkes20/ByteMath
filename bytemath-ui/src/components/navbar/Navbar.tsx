import {Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import {AccountTree, Code, ExpandLess, ExpandMore, Functions, SettingsInputComponent} from '@mui/icons-material';
import {MouseEventHandler, useState} from "react";
import LoginButton from "./LoginButton";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        const target = e.currentTarget as HTMLElement;
        setAnchorEl(target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSelect = (course: string) => {
        console.log(course);
    }

    return (
        <div style={{
            padding: "10px 20px",
            color: "#3a3939",
            borderBottom: "1px solid ",
            position: "sticky",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Button
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ textTransform: 'none'}}
            >
                <Typography variant={"inherit"} color={"#ffffff"} fontSize={18} fontFamily={"Roboto"}>Courses</Typography>
                {
                    open ? <ExpandLess style={{
                        color: "#ffffff",
                    }}/> : <ExpandMore style={{
                        color: "#ffffff",
                    }}
                    />
                }
            </Button>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'categories-btn',
                }}
            >
                <MenuItem onClick={() => onSelect('Binary System')}>
                    <ListItemIcon>
                        <Code/>
                    </ListItemIcon>
                    <ListItemText style={{
                    }}>Binary System</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('Logic Operands')}>
                    <ListItemIcon>
                        <SettingsInputComponent fontSize="small" />
                    </ListItemIcon>
                    <ListItemText style={{
                    }}>Logic Operands</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('Theory of Graphs')}>
                    <ListItemIcon>
                        <AccountTree fontSize="small" />
                    </ListItemIcon>
                    <ListItemText style={{
                    }}>Theory of Graphs</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onSelect('Theory of Numbers')}>
                    <ListItemIcon>
                        <Functions fontSize="small" />
                    </ListItemIcon>
                    <ListItemText style={{
                    }}>Theory of Numbers</ListItemText>
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
                <LanguageSwitcher />
                <LoginButton/>
            </div>
        </div>
    )

}

export default Navbar;