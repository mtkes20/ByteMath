import {styled, Typography} from "@mui/material";


const BooleanAlgebra = () => {


    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            overflowY: "auto"
        }}>
            <Title>Boolean Algebra</Title>
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

export default BooleanAlgebra;
