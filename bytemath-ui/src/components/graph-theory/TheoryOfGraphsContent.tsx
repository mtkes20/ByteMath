import React, {useState} from "react";
import {Stack} from "@mui/material";
import SideMenu from "../content-side-menu/SideMenu";
import {AccountTree} from "@mui/icons-material";
import Introduction from "./introduction/Introduction";
import {useTranslation} from 'react-i18next';

const TheoryOfGraphsContent: React.FC = () => {
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState<string>("introduction");

    return (
        <Stack display={"flex"} flexDirection={"row"} height={'calc(100vh - 70px)'} style={{height: "auto"}}>
            <SideMenu
                icon={<AccountTree fontSize="small"/>}
                title={t('graphTheoryTitle')}
                items={[{title: t('introduction'), value: "introduction"}]}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            {selectedItem === "introduction" && <Introduction/>}
            <div/>
        </Stack>
    );
}

export default TheoryOfGraphsContent;
