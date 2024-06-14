import {useState} from "react";
import {styled, Typography} from "@mui/material";


const BinaryVisualization = () => {
    const [bits, setBits] = useState<boolean[]>(Array(16).fill(false));

    const toggleBit = (index: number) => {
        const newBits = [...bits];
        newBits[index] = !newBits[index];
        setBits(newBits);
    };

    const calculateDecimal = () => {
        return bits.reduce((acc, bit, index) => acc + (bit ? Math.pow(2, bits.length - 1 - index) : 0), 0);
    };

    return (
        <BinaryVisualisationContainer>
            <Bits>
                {bits.map((bit, index) => (
                    <Bit
                        key={index}
                        style={{
                            backgroundColor: bit ? '#40a138' : '#b7adad',
                        }}
                        className={`bit ${bit ? 'on' : 'off'}`}
                        onClick={() => toggleBit(index)}
                    >
                        {bit ? 1 : 0}
                    </Bit>
                ))}
            </Bits>
            <Decimal>
                Decimal Value: {calculateDecimal()}
            </Decimal>
        </BinaryVisualisationContainer>
    );
}

const BinaryVisualisationContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const Bits = styled("div")(() => ({
    display: "flex",
    marginBottom: "20px",
    flexDirection: "row",
    gap: "10px",
}));

const Bit = styled("button")(() => ({
    width: "40px",
    height: "40px",
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    border: "none",
    borderRadius: "5px",
}));

const Decimal = styled(Typography)(() => ({
    fontSize: "24px",
    fontWeight: "bold",
    color: "white"
}));

export default BinaryVisualization;