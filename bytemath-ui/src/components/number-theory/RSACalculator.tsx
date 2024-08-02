import React, {useState} from "react";
import {Button, Card, styled, TextField, Typography} from "@mui/material";
import {StyledCard, StyledText, StyledTextField, Subtitle} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";

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

    const { t } = useTranslation()

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
            <Subtitle>{t('numberTheory.rsaAlgorithm.calculator.title')}</Subtitle>
            <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                <StyledTextField
                    label={`${t('numberTheory.rsaAlgorithm.calculator.prime')} p`}
                    type="number"
                    value={p}
                    onChange={(e) => setP(e.target.value)}
                />
                <StyledTextField
                    label={`${t('numberTheory.rsaAlgorithm.calculator.prime')} q`}
                    type="number"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <StyledButton onClick={generateKeys}>{t("generateKeys")}</StyledButton>
            </div>
            {publicKey.e !== 0 && (
                <div>
                    <StyledText>Public Key (e, n): ({publicKey.e}, {publicKey.n})</StyledText>
                    <StyledText>Private Key (d, n): ({privateKey.d}, {privateKey.n})</StyledText>
                </div>
            )}
            <div style={{marginTop: '10px', display: "flex", alignItems: "Center"}}>
                <StyledTextField
                    label={t('numberTheory.rsaAlgorithm.calculator.messageToEncrypt')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <StyledButton onClick={encrypt}>{t("encrypt")}</StyledButton>
            </div>
            {encryptedMessage && (
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center"
                }}>
                    <StyledText>{`${t("encrypted")}: ${encryptedMessage}`}</StyledText>
                    <StyledText>Encrypted: {encryptedMessage}</StyledText>
                    <StyledButton onClick={decrypt}>{t("decrypt")}</StyledButton>
                </div>
            )}
            {decryptedMessage && (
                <StyledText>Decrypted: {decryptedMessage}</StyledText>
            )}
        </StyledCard>
    );
};


const StyledButton = styled(Button)({
    color: "#5C6BC0"
});

export default RSACalculator;