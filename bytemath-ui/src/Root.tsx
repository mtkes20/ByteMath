import Navbar from "./components/navbar/Navbar";
import {useState} from "react";
import {Outlet} from "react-router-dom";


const Root = () => {
    const [language, setLanguage] = useState<'en' | 'ka'>('en');

    const handleLanguageChange = () => {
        setLanguage(language === 'en' ? 'ka' : 'en');
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            height: "100vh",
        }}>
            <Navbar language={language} onLanguageChange={handleLanguageChange} />
            <Outlet/>
        </div>
    );
}
export default Root;
