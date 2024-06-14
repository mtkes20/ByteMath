import Navbar from "./components/navbar/Navbar";
import LogicalOperatorsContent from "./components/logical-operators/LogicalOperatorsContent";
import {useState} from "react";


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
            height: "100%"
        }}>
            <Navbar language={language} onLanguageChange={handleLanguageChange} />
            {/* TODO component according to routing */}
            {/* <BinarySystemContent /> */}
            <LogicalOperatorsContent language={language} />
        </div>
    );
}
export default Root;
