import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";


const LoginButton: React.FC = () => {
    const {keycloak, isAuthenticated, isInitialized, username} = useKeycloak();
    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();

    useEffect(() => {
        if (isAuthenticated && location.hash) {
            const cleanPath = location.pathname || '/';
            navigate(cleanPath, {replace: true});
        }
    }, [isAuthenticated, location, navigate]);

    const handleLogin = () => {
        if (isAuthenticated) {
            keycloak?.logout()
                .then(() => {
                    // The state will be updated automatically by the KeycloakProvider
                })
                .catch(console.error);
        } else {
            keycloak?.login().catch(console.error);
        }
    };

    if (!isInitialized) {
        return null; // or a loading indicator
    }

    return (
        <Box display="flex" alignItems="center">
            {isAuthenticated && username && (
                <Typography variant="body1" style={{marginRight: '10px'}}>
                    Welcome, {username}!
                </Typography>
            )}
            <Button
                onClick={handleLogin}
                style={{
                    backgroundColor: '#800080',
                    padding: '5px 10px',
                    color: '#FFFFFF',
                    fontFamily: 'Roboto',
                }}
            >
                {isAuthenticated ? t("signOut") : t("signIn")}
            </Button>
        </Box>
    );
};
export default LoginButton;