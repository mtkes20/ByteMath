import {styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";


const Introduction = () => {

    const { t } = useTranslation();

    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
        }}>
            <Title>{t("introduction_to_logical_operators_title")}</Title>
            <Text>Logical operators are essential tools in programming, allowing us to make decisions and control the
                flow of a program based on certain conditions. They are used to combine or modify logical statements,
                enabling more complex expressions. Understanding logical operators is fundamental for any programmer, as
                they are used in virtually every programming language.</Text>
            <div style={{
                padding: "60px"
            }}>
            </div>
        </div>
    )
}

const Title = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h1"
}))

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}))

export default Introduction;
