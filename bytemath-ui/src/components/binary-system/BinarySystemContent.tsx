import SideMenu from "../content-side-menu/SideMenu";
import {Code} from '@mui/icons-material';
import {Stack} from "@mui/material";


const BinarySystemContent = () => {

    return (
        <Stack display={"flex"} flexDirection={"row"} style={{
            height: "100%",
        }}>
            <SideMenu icon={<Code/>} title={"Binary System"} items={
                // TODO these topics are just for UI testing
                [
                    {title: "Binary to Decimal", value: "binary-to-decimal"},
                    {title: "Decimal to Binary", value: "decimal-to-binary"},
                    {title: "Binary to Hexadecimal", value: "binary-to-hexadecimal"},
                ]
            }/>
            <div/>
        </Stack>
    )
}

export default BinarySystemContent;