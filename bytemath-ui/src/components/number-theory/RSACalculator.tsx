import React, {useState} from "react";
import {Button, Card, styled, TextField, Typography} from "@mui/material";

interface PublicKey {
    e: number;
    n: number;
}

interface PrivateKey {
    d: number;
    n: number;
}

const RSACalculator: React.FC = () => {
    const [p, setP] = useState<string>('');
    const [q, setQ] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [publicKey, setPublicKey] = useState<PublicKey>({e: 0, n: 0});
    const [privateKey, setPrivateKey] = useState<PrivateKey>({d: 0, n: 0});
    const [encryptedMessage, setEncryptedMessage] = useState<string>('');
    const [decryptedMessage, setDecryptedMessage] = useState<string>('');

    const generateKeys = (): void => {
        const pNum = parseInt(p);
        const qNum = parseInt(q);
        if (isNaN(pNum) || isNaN(qNum) || !isPrime(pNum) || !isPrime(qNum)) {
            //TODO Add component for error handling
            alert('Please enter valid prime numbers for p and q');
            return;
        }

        const n = pNum * qNum;
        const phi = (pNum - 1) * (qNum - 1);
        const e = findCoprime(phi);
        if (e === undefined) {
            //TODO Add component for error handling
            alert('Failed to generate keys. Please try different prime numbers.');
            return;
        }
        const d = modInverse(e, phi);

        if (d !== undefined) {
            setPublicKey({e, n});
            setPrivateKey({d, n});
        } else {
            //TODO Add component for error handling
            alert('Failed to generate keys. Please try different prime numbers.');
        }
    };

    const encrypt = (): void => {
        if (!publicKey.e || !publicKey.n) {
            //TODO Add component for error handling
            alert('Please generate keys first');
            return;
        }
        const encrypted = message.split('').map(char =>
            modPow(char.charCodeAt(0), publicKey.e, publicKey.n)
        ).join(' ');
        setEncryptedMessage(encrypted);
    };

    const decrypt = (): void => {
        if (!privateKey.d || !privateKey.n) {
            //TODO Add component for error handling
            alert('Please generate keys first');
            return;
        }
        const decrypted = encryptedMessage.split(' ').map(num =>
            String.fromCharCode(modPow(parseInt(num), privateKey.d, privateKey.n))
        ).join('');
        setDecryptedMessage(decrypted);
    };

    const isPrime = (num: number): boolean => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    const findCoprime = (phi: number): number | undefined => {
        for (let e = 2; e < phi; e++) {
            if (gcd(e, phi) === 1) return e;
        }
        return undefined;
    };

    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

    const modInverse = (a: number, m: number): number | undefined => {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) return x;
        }
        return undefined;
    };

    const modPow = (base: number, exponent: number, modulus: number): number => {
        if (modulus === 1) return 0;
        let result = 1;
        base = base % modulus;
        while (exponent > 0) {
            if (exponent % 2 === 1) result = (result * base) % modulus;
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }
        return result;
    };

    return (
        <StyledCard>
            <Subtitle>RSA Calculator</Subtitle>
            <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                <StyledTextField
                    label="Prime p"
                    type="number"
                    value={p}
                    onChange={(e) => setP(e.target.value)}
                />
                <StyledTextField
                    label="Prime q"
                    type="number"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <StyledButton onClick={generateKeys}>
                    Generate Keys
                </StyledButton>
            </div>
            {publicKey.e !== 0 && (
                <div>
                    <Text>Public Key (e, n): ({publicKey.e}, {publicKey.n})</Text>
                    <Text>Private Key (d, n): ({privateKey.d}, {privateKey.n})</Text>
                </div>
            )}
            <div style={{marginTop: '10px', display: "flex", alignItems: "Center"}}>
                <StyledTextField
                    label="Message to Encrypt"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <StyledButton onClick={encrypt}>Encrypt</StyledButton>
            </div>
            {encryptedMessage && (
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center"
                }}>
                    <Text>Encrypted: {encryptedMessage}</Text>
                    <StyledButton onClick={decrypt}>Decrypt</StyledButton>
                </div>
            )}
            {decryptedMessage && (
                <Text>Decrypted: {decryptedMessage}</Text>
            )}
        </StyledCard>
    );
};

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}));

const Subtitle = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h2"
}));

const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "0.5px solid white",
});

const StyledButton = styled(Button)({
    color: "#5C6BC0"
});

const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:before': {
        borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiFormLabel-root': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
}));

export default RSACalculator;