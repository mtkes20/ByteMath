import React from 'react';
import { Button } from "@mui/material";

interface LanguageSwitcherProps {
    language: 'en' | 'ka';
    onLanguageChange: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onLanguageChange }) => {
    return (
        <Button onClick={onLanguageChange} style={{ color: "#ffffff" }}>
            {language === 'en' ? 'Eng' : 'Geo'}
        </Button>
    );
};

export default LanguageSwitcher;
