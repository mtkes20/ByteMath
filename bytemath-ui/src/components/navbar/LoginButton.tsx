import React from 'react';
import {Button} from "@mui/material";
import Keycloak from "keycloak-js"; // make sure this path is correct

interface KeycloakOptions {
    url: string;
    realm: string;
    clientId: string;
    onLoad: Keycloak.KeycloakOnLoad;
}

let initOptions: KeycloakOptions = {
    url: 'http://localhost:8080/',
    realm: 'master',
    clientId: 'bytemath',
    onLoad: 'login-required'
}

const keycloak: Keycloak = new Keycloak(initOptions);

const LoginButton: React.FC = () => {
    const handleLogin = () => {
        keycloak.init({ onLoad: initOptions.onLoad}).then((auth: boolean) => {
            if (!auth) {
                console.error("Not Authenticated");
            } else {
                console.info("Authenticated");
            }
        }).catch(() => {
            console.error("Authentication Failed");
        });
    };

    return (
        <Button onClick={handleLogin} style={{
            backgroundColor: "#800080",
            padding: "5px 10px",
            color: "#ffffff",
            fontFamily: "Roboto",
        }}>
            Sign In
        </Button>
    );
}

export default LoginButton;
