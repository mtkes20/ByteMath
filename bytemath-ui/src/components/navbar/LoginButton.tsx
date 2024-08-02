import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import Keycloak from 'keycloak-js';
import {useLocation, useNavigate} from 'react-router-dom';

const keycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'bytemath',
    clientId: 'bytemath',
};

const keycloak = new Keycloak(keycloakConfig);

const initKeycloak = async () => {
    try {
        const authenticated = await keycloak.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256',
            responseMode: 'query'
        });
        return authenticated;
    } catch (error) {
        return false;
    }
};

const LoginButton: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [username, setUsername] = useState<string | undefined>(undefined);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const initialize = async () => {
            const authenticated = await initKeycloak();
            setIsAuthenticated(authenticated);
            setIsInitialized(true);

            if (authenticated) {
                if (location.hash) {
                    const cleanPath = location.pathname || '/';
                    navigate(cleanPath, { replace: true });
                }
                try {
                    await keycloak.loadUserProfile();
                    setUsername(keycloak.profile?.username);
                } catch (error) {
                }
            }
        };

        initialize();
    }, [location, navigate]);

    const handleLogin = () => {
        if (isAuthenticated) {
            keycloak.logout()
                .then(() => {
                    setIsAuthenticated(false);
                    setUsername(undefined);
                })
                .catch(console.error);
        } else {
            keycloak.login()
                .catch(console.error);
        }
    };

    return (
        <Box display="flex" alignItems="center">
            {isAuthenticated && username && (
                <Typography variant="body1" style={{ marginRight: '10px' }}>
                    Welcome, {username}!
                </Typography>
            )}
            <Button
                onClick={handleLogin}
                style={{
                    backgroundColor: '#800080',
                    padding: '5px 10px',
                    color: '#ffffff',
                    fontFamily: 'Roboto',
                }}
            >
                {isAuthenticated ? 'Sign Out' : 'Sign In'}
            </Button>
        </Box>
    );
};

export default LoginButton;
