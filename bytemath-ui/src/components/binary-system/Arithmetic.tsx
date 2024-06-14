import {styled, Typography} from "@mui/material";
import BinaryCalculator from "./BinaryCalculator";


const Arithmetic = () => {


    //TODO examples require alignment or another component
    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
        }}>
            <Text>Binary arithmetic operates similarly to decimal arithmetic but follows the rules of binary. Let's
                discuss primary operations: addition, subtraction, multiplication, and division.</Text>
            <Title>Binary Addition</Title>
            <Text>Binary addition is similar to decimal addition, but the sum of 1 and 1 is 10 in binary. The following
                table shows the binary addition rules:</Text>
            <Text>
                0 + 0 = 0 <br/>
                0 + 1 = 1 <br/>
                1 + 0 = 1 <br/>
                1 + 1 = 10 (which is 0 carry 1) <br/>
            </Text>
            <Text>
                For example, adding 1011 and 1101:
            </Text>
            <Text>
                <pre>
                    1011 <br/>
                    + 1101 <br/>
                    ------ <br/>
                    10100
                </pre>
            </Text>
            <Title>Binary Subtraction</Title>
            <Text>Binary subtraction is similar to decimal subtraction, but the difference of 0 and 1 is 1 in binary.
                The
                following table shows the binary subtraction rules:</Text>
            <Text>
                0 - 0 = 0 <br/>
                1 - 0 = 1 <br/>
                1 - 1 = 0 <br/>
                0 - 1 = 1 (borrow 1 from the next higher bit) <br/>
            </Text>
            <Text>For example, subtracting 1011 from 1101:</Text>
            <Text>
                <pre>
                    1101 <br/>
                    - 1011 <br/>
                    ------ <br/>
                    010
                </pre>
            </Text>
            <Title>Binary Multiplication</Title>
            <Text>Binary multiplication is simpler than decimal multiplication. The rules are:</Text>
            <Text>
                0 * 0 = 0 <br/>
                0 * 1 = 0 <br/>
                1 * 0 = 0 <br/>
                1 * 1 = 1 <br/>
            </Text>
            <Text>For example, multiplying 101 by 11:</Text>
            <Text>
                <pre>
                    101 <br/>
                    * 11 <br/>
                    ------ <br/>
                     101<br/>
                   + 1010 <br/>
                    ------ <br/>
                    1111
                </pre>
            </Text>
            <Title>Binary Division</Title>
            <Text>Binary division is similar to decimal division but uses binary numbers.
                For example, dividing 1010 by 10:</Text>
            <Text>
                101 <br/>
                ------ <br/>
                10 | 1010 <br/>
                - 10 <br/>
                ---- <br/>
                10 <br/>
                -10 <br/>
                ---- <br/>
                0 <br/>
            </Text>
            <div style={{
                padding: "60px 0",
            }}>
                <BinaryCalculator/>
            </div>
        </div>
    )
}

const Title = styled(Typography)(() => ({
    color: "white",
    fontSize:
        "1.5rem",
    fontWeight:
        "bold",
    fontFamily:
        "Roboto",
    variant:
        "h1"
}))

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize:
        "1rem",
    fontFamily:
        "Roboto",
}))

export default Arithmetic;