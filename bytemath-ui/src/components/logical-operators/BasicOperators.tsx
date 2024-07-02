import {styled, Typography} from "@mui/material";
import BasicOperatorCalculator from "../logical-operators/BasicOperatorCalculator";


const BasicOperators = () => {

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
            <Title>Basic Logical Operators</Title>
            <Text>
                Logical operators are essential for creating complex conditions in our code. The basic logical operators
                include:
                <br/><br/>
            </Text>
            <Title>AND (&&)</Title>
            <Text>Returns true if both operands are true.
                <br/>
                <em>Example</em>: <code>true && false</code> results in <code>false</code>.
                <br/><br/>
            </Text>

            <Title>OR (||)</Title>
            <Text>
                Returns true if at least one operand is true.
                <br/>
                <em>Example</em>: <code>true || false</code> results in <code>true</code>.
                <br/><br/>
            </Text>

            <Title>NOT (!)</Title>
            <Text>
                Inverts the truth value of the operand.
                <br/>
                <em>Example</em>: <code>!true</code> results in <code>false</code>.
                <br/><br/>
            </Text>

            <Text>
                These operators are fundamental in writing conditional statements and controlling loops in
                programming.
            </Text>

            <div style={{
                padding: "60px"
            }}>
                <BasicOperatorCalculator/>
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

export default BasicOperators;
