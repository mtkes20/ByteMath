import React from 'react';
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageSwitch = () => {
        const language = i18n.resolvedLanguage === 'ka' ? 'en' : 'ka';
        i18n.changeLanguage(language);
        localStorage.setItem("language", language)
    }

    return (
        <Button onClick={handleLanguageSwitch} style={{ color: "#ffffff" }}>
            {
                i18n.resolvedLanguage === 'ka' ? 'ქართ' : 'Eng'
            }
        </Button>
    );
};

export default LanguageSwitcher;
