import React from 'react';
import { Stack } from '@mui/material';
import SideMenu from "../content-side-menu/SideMenu";
import { Code } from '@mui/icons-material';
import { translations, Translations, TranslationContent } from './resources';

type MenuItem = {
    title: string;
    value: keyof Translations["en"];
};

interface LogicalOperatorsContentProps {
    language: 'en' | 'ka';
}

const LogicalOperatorsContent: React.FC<LogicalOperatorsContentProps> = ({ language }) => {
    const [selectedItem, setSelectedItem] = React.useState<keyof Translations["en"]>('introductionToLogicalOperators');

    const renderContent = () => {
        const content: TranslationContent = translations[language][selectedItem];

        return (
            <div style={{
                padding: '20px',
                color: "#ffffff",
                fontFamily: "Roboto",
                fontSize: "1.2rem"
            }}>
                <h1>{content.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
        );
    };


    const menuItems: MenuItem[] = [
        { title: "Introduction to Logical Operators", value: "introductionToLogicalOperators" },
        { title: "Basic Logical Operators", value: "basicLogicalOperators" },
        { title: "Advanced Logical Operators", value: "advancedLogicalOperators" },
        { title: "Truth Tables", value: "truthTables" },
        { title: "Boolean Algebra", value: "booleanAlgebra" },
        { title: "Applications of Logical Operators", value: "applicationsOfLogicalOperators" },
        { title: "Practical Examples", value: "practicalExamples" },
    ];



    return (
        <Stack display={"flex"} flexDirection={"row"} style={{ height: "100%" }}>
            <SideMenu
                icon={<Code />}
                title={"Logical Operators"}
                items={menuItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                // onItemSelect={(item: MenuItem) => setSelectedItem(item.value)}
            />
            <div style={{ flex: 1 }}>
                {renderContent()}
            </div>
        </Stack>
    );
}

export default LogicalOperatorsContent;
