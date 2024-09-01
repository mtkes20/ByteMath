import {useEffect, useRef, useState} from 'react';
import {useKeycloak} from "../context/KeycloakProvider";
import PageApi from "../api/page-api";

export const usePage = (pageId?: string, delay: number = 5000) => {
    const {keycloak, isAuthenticated} = useKeycloak();
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [readPages, setReadPages] = useState<Set<string | undefined>>(new Set());

    useEffect(() => {
        if (isAuthenticated && keycloak?.token) {
            fetchUserReadPages();
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isAuthenticated, keycloak?.token]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            if (isAuthenticated && keycloak?.token) {
                markPageAsRead(pageId);
            }
        }, delay);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [pageId, isAuthenticated, keycloak?.token, delay]);

    const fetchUserReadPages = async () => {
        if (!keycloak?.token) return;

        PageApi.getReadPages(keycloak.token).then(data => {
            setReadPages(new Set(data || []));
        }).catch(error => {
            console.error('Error fetching user progress:', error);
        });
    };

    const markPageAsRead = async (pageId?: string) => {
        if(!pageId){
            return
        }
        if (!keycloak?.token) return;
        PageApi.markPageAsRead(pageId, keycloak.token).then(() => {
            setReadPages(prev => new Set(prev).add(pageId));
        }).catch(error => {
            console.error('Error marking page as read:', error);
        })
    };

    return {markPageAsRead, readPages};
};
