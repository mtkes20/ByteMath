import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import {StyledButton} from "../utils/StyledComponents";

const LoginButton: React.FC = () => {
    const {keycloak, isInitialized, username} = useKeycloak();
    const {t, i18n} = useTranslation();

    const handleLogin = () => {
        keycloak?.login({
            locale: i18n.language === 'ka' ? 'ka' : 'en'
        }).catch(console.error);
    };

    if (!isInitialized) {
        return <></>;
    }

    return (
        <Box display="flex" alignItems="center">
            <StyledButton
                onClick={handleLogin}
            >
                {t("signIn")}
            </StyledButton>
        </Box>
    );
};

export default LoginButton;
