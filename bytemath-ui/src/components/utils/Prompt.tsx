import React, {useEffect} from 'react';
import {useKeycloak} from "../../context/KeycloakProvider";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {styled} from "@mui/material";
import {StyledButton, Title} from "./StyledComponents";

const Prompt = ({title} : {
    title: string
}) => {
    const {keycloak, isAuthenticated, isInitialized, username} = useKeycloak();
    const navigate = useNavigate();
    const location = useLocation();
    const {t, i18n} = useTranslation();

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
                })
                .catch(console.error);
        } else {
            keycloak?.login({
                locale: i18n.language === 'ka' ? 'ka' : 'en'
            }).catch(console.error);
        }
    };

    return (
        <PromptContainer>
            <Title>
                {title}
            </Title>
            <StyledButton
                variant="contained"
                onClick={handleLogin}
            >
                {t("signIn")}
            </StyledButton>
        </PromptContainer>
    );
};

const PromptContainer = styled('div')({
    width: "80%",
    alignSelf: "center",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    gap: "30px"
})

export default Prompt;
