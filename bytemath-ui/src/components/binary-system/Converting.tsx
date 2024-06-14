import {styled, Typography} from "@mui/material";
import BinaryConverter from "./BinaryConverter";


const Converting = () => {


    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
        }}>
            <Title>Converting Binary to Decimal</Title>
            <Text>To convert a binary number to decimal, you need to sum the products of each bit and its corresponding
                power of 2.
                For example, the binary number 1011 is converted to decimal as follows:</Text>
            <Text>(1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 8 + 0 + 2 + 1 = 11</Text>
            <Title>Converting Decimal to Binary</Title>
            <Text>To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainders.
                The binary representation is the sequence of remainders read from bottom to top. For example, to convert
                the decimal number 11 to binary:</Text>
            <Text>
                11 / 2 = 5 remainder 1 <br/>
                5 / 2 = 2 remainder 1 <br/>
                2 / 2 = 1 remainder 0 <br/>
                1 / 2 = 0 remainder 1 <br/>
            </Text>
            <Text>
                Reading the remainders from bottom to top, we get 1011.
            </Text>
            <div style={{
                padding: "60px 0"
            }}>
                <BinaryConverter/>
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

export default Converting;