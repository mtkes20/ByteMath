import React from 'react';
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onLanguageChange }) => {
    const { i18n } = useTranslation();

    const handleLanguageSwitch = () => {
        i18n.resolvedLanguage === 'ka' ? i18n.changeLanguage('en') : i18n.changeLanguage('ka');
        localStorage.setItem("language", i18n.resolvedLanguage === "ka" ? "ka" : "en")
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
