import React, { useState } from 'react';
import {Button} from "@mui/material";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = () => {
        setLanguage(language === 'en' ? 'ka' : 'en');
    };

    return (
        <Button onClick={handleLanguageChange} style={{
            color: "#ffffff",
        }}>
            {language === 'en' ? 'Eng' : 'Geo'}
        </Button>
    );
};

export default LanguageSwitcher;
