import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Box, Paper} from "@mui/material";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

interface SideMenuProps {
    icon: JSX.Element;
    title: string;
    items: { title: string, value: string, icon?: JSX.Element | null }[];
    selectedItem: string;
    setSelectedItem: (item: any) => void
}

const SideMenu: React.FC<SideMenuProps> = ({ icon, title, items, selectedItem, setSelectedItem }) => {

    const handleItemClick = (value: string) => {
        setSelectedItem(value);
    };

    return (
        <Box sx={{ width: 300, backgroundColor: "#1a1a1a", color: "white", height: "100%" }}>
            <Paper sx={{
                backgroundColor: "#1a1a1a",
                height: "100%" }}>
                <List>
                    <ListItem style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                        borderBottom: "1px solid #3a3939",
                    }}>
                        <ListItemIcon style={{
                            color: "white",
                            minWidth: "30px",
                            minHeight: "30px",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#800080",
                            borderRadius: "100px",
                        }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={title}
                                      primaryTypographyProps={{
                                          // fontSize: '1.2rem',
                                          fontWeight: 'bold',
                                          color: 'white',
                                          fontFamily: "Roboto",
                            }}
                        />
                    </ListItem>
                    {items.map((item) => (
                        <ListItem
                            button
                            key={item.value}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                position: 'relative',
                                '&:hover::after': {
                                    content: '""',
                                    position: 'absolute',
                                    height: '100%',
                                    width: '5px',
                                    backgroundColor: "#800080",
                                    right: 0
                                },
                                '&::after': {
                                    content: selectedItem === item.value ? '""' : 'none',
                                    position: 'absolute',
                                    height: '100%',
                                    width: '5px',
                                    backgroundColor: "#800080",
                                    right: 0
                                }
                            }}
                            onClick={() => handleItemClick(item.value)}
                        >
                            <ListItemText style={{
                                color: selectedItem === item.value ? "#800080" : "white",
                                fontFamily: "Roboto",
                            }} primary={item.title} />
                            {
                                !!item.icon &&
                                <div style={{
                                    width: "20px",
                                }}>
                                    <ListItemIcon style={{
                                        color: "#5C6BC0"
                                    }}>{item.icon}</ListItemIcon>
                                </div>
                            }
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}

export default SideMenu;
