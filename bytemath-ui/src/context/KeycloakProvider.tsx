import React, { createContext, useContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import {QueryObserverResult, RefetchOptions, useQuery} from "@tanstack/react-query";
import ProfilePictureApi from "../api/profile-picture-api";

const keycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'bytemath',
    clientId: 'bytemath',
};

interface KeycloakContextType {
    keycloak: Keycloak | null;
    isAuthenticated: boolean;
    isInitialized: boolean;
    username: string | undefined;
    email: string | undefined;
    profilePicture: Blob | undefined;
    refetchProfilePicture: (options?: RefetchOptions) => Promise<QueryObserverResult<Blob | undefined>>;
}

const KeycloakContext = createContext<KeycloakContextType>({
    keycloak: null,
    isAuthenticated: false,
    isInitialized: false,
    username: undefined,
    email: undefined,
    profilePicture: undefined,
    refetchProfilePicture: async () => {
        return {} as QueryObserverResult<Blob | undefined>;
    }
});

export const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [keycloak] = useState(new Keycloak(keycloakConfig));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [username, setUsername] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string | undefined>(undefined);

    const fetchProfilePicture = async () => {
        return ProfilePictureApi.getProfilePicture(keycloak?.token);
    }

    const {
        data: profilePicture,
        isLoading: profilePictureLoading,
        isError: profilePictureError,
        refetch: refetchProfilePicture
    } = useQuery<Blob | undefined>({
        queryKey: ['profilePicture', keycloak?.token],
        queryFn: fetchProfilePicture,
    });


    useEffect(() => {
        const initKeycloak = async () => {
            try {
                const authenticated = await keycloak.init({
                    onLoad: 'check-sso',
                    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
                    pkceMethod: 'S256',
                    responseMode: 'query'
                });
                setIsAuthenticated(authenticated);
                setIsInitialized(true);
                if (authenticated) {
                    try {
                        await keycloak.loadUserProfile();
                        setUsername(keycloak.profile?.username);
                        setEmail(keycloak.profile?.email)
                    } catch (error) {
                        console.error('Failed to load user profile', error);
                    }
                }
            } catch (error) {
                console.error('Failed to initialize Keycloak', error);
                setIsInitialized(true);
            }
        };
        initKeycloak();
    }, [keycloak]);
    return (
        <KeycloakContext.Provider value={{
            keycloak, isAuthenticated, isInitialized, username, email, profilePicture, refetchProfilePicture
        }}>
            {children}
        </KeycloakContext.Provider>
    );
};
export const useKeycloak = () => useContext(KeycloakContext);
