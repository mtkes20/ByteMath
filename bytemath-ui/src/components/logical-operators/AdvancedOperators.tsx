import { styled, Typography } from "@mui/material";
import AdvancedOperatorCalculator from "../logical-operators/AdvancedOperatorCalculator";

const AdvancedOperators = () => {

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
            <Title>Advanced Logical Operators</Title>
            <Text>
                Advanced logical operators build upon the basic ones, offering more complex and powerful ways to
                manipulate logical conditions. These include:
                <br/><br/>
            </Text>

            <Title>XOR (^)</Title>
            <Text>
                Returns true if the operands are different.
                <br/>
                <em>Example</em>: <code>true ^ false</code> results in <code>true</code>.
                <br/><br/>
            </Text>

            <Text>
                These operators are invaluable in scenarios requiring complex condition checks, nullish values handling,
                and succinct conditional logic expressions.
            </Text>

            <div style={{
                padding: "60px"
            }}>
                <AdvancedOperatorCalculator/>
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

export default AdvancedOperators;
