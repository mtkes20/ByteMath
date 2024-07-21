import {Button, Card, styled, TextField, Typography} from "@mui/material";
import {useState} from "react";
import RSACalculator from "./RSACalculator";


const RSAAlgorithm = () => {

    return (
        <Container>
            <Title>RSA Algorithm</Title>

            <StyledCard>
                <Subtitle>What is RSA?</Subtitle>
                <Text>
                    RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem that is widely used for secure data
                    transmission. It is an asymmetric cryptographic algorithm, meaning it uses two different keys: a
                    public key for encryption and a private key for decryption.
                </Text>
                <Text>
                    RSA was first described in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman at MIT. The letters
                    RSA are the initials of their surnames. It was one of the first practical public-key cryptosystems
                    and is still widely used for secure data transmission.
                </Text>
            </StyledCard>

            <StyledCard>
                <Subtitle>Importance of RSA</Subtitle>
                <Text>
                    1. Security: RSA's security is based on the practical difficulty of factoring the product of two
                    large prime numbers, known as the factoring problem.
                </Text>
                <Text>
                    2. Digital Signatures: RSA can be used to create digital signatures, ensuring the authenticity and
                    integrity of digital messages or documents.
                </Text>
                <Text>
                    3. Key Exchange: It enables secure exchange of keys over insecure channels, which is crucial for
                    establishing secure communication.
                </Text>
                <Text>
                    4. Widespread Use: RSA is used in many protocols, including SSL/TLS, which is used to secure
                    internet communications.
                </Text>
            </StyledCard>

            <StyledCard>
                <Subtitle>How RSA Works: Detailed Steps</Subtitle>
                <Text>1. Key Generation:
                    <ul>
                        <li>Choose two distinct large prime numbers p and q.</li>
                        <li>Compute n = p * q. This n is called the modulus for both the public and private keys.</li>
                        <li>Compute φ(n) = (p-1) * (q-1). This is Euler's totient function.</li>
                        <li>{`Choose an integer e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1. This e is the public exponent.`}</li>
                        <li>Compute d as the modular multiplicative inverse of e (mod φ(n)). This d is the private
                            exponent.
                        </li>
                    </ul>
                </Text>
                <Text>
                    2. Key Distribution:
                    <ul>
                        <li>The public key is (e, n). This can be known to everyone and is used for encryption.</li>
                        <li>The private key is (d, n). This must be kept secret and is used for decryption.</li>
                    </ul>
                </Text>
                <Text>
                    3. Encryption:
                    <ul>
                        <li>{`Convert the message into a number m, where 0 ≤ m < n.`}</li>
                        <li>Compute the ciphertext c = m^e mod n.</li>
                    </ul>
                </Text>
                <Text>
                    4. Decryption:
                    <ul>
                        <li>Use the private key (d, n) to compute m = c^d mod n.</li>
                        <li>Convert m back to the original message.</li>
                    </ul>
                </Text>
            </StyledCard>
            <StyledCard>
                <Subtitle>Mathematical Foundation</Subtitle>
                <Text>
                    The security of RSA relies on two mathematical facts:
                </Text>
                <Text>
                    1. Modular Exponentiation: It's computationally easy to calculate n = p * q and c = m^e mod n.
                </Text>
                <Text>
                    2. Prime Factorization: It's computationally difficult to determine p and q from n, especially when
                    p and q are large primes.
                </Text>
                <Text>
                    The algorithm also relies on Euler's theorem and the properties of modular arithmetic to ensure that
                    encryption and decryption are inverse operations.
                </Text>
            </StyledCard>
            <StyledCard>
                <Subtitle>Security Considerations</Subtitle>
                <StyledList>
                    <StyledListItem>Key Size: The security of RSA depends on the size of n. As of 2021, a key size of
                        2048 bits is considered secure for most applications.</StyledListItem>
                    <StyledListItem>Prime Number Generation: The prime numbers p and q must be generated randomly and
                        kept secret.</StyledListItem>
                    <StyledListItem>Padding: In practice, RSA is often used with padding schemes like OAEP to enhance
                        security.</StyledListItem>
                    <StyledListItem>Side-Channel Attacks: Implementations must be careful to avoid leaking information
                        through timing
                        or power consumption.
                    </StyledListItem>
                </StyledList>
            </StyledCard>

            <StyledCard>
                <Subtitle>Practical Example</Subtitle>
                <Text>
                    Let's walk through a simple example with small numbers (note: in practice, much larger numbers are
                    used):
                </Text>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <StyledList>
                        <StyledListItem>Choose p = 61 and q = 53</StyledListItem>
                        <StyledListItem>Calculate n = 61 * 53 = 3233</StyledListItem>
                        <StyledListItem>Calculate φ(n) = (61-1) * (53-1) = 3120</StyledListItem>
                        <StyledListItem>Choose e = 17 (coprime with 3120)</StyledListItem>
                        <StyledListItem>Find d such that (d * 17) mod 3120 = 1. d = 2753</StyledListItem>
                        <StyledListItem>Public key is (17, 3233), Private key is (2753, 3233)</StyledListItem>
                        <StyledListItem>To encrypt m = 123: c = 123^17 mod 3233 = 855</StyledListItem>
                        <StyledListItem>To decrypt c = 855: m = 855^2753 mod 3233 = 123</StyledListItem>
                    </StyledList>
                </div>
            </StyledCard>
            <RSACalculator/>
        </Container>
    )
}

const Container = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a"
});

const StyledList = styled('ol')({
    paddingLeft: '20px',
    listStylePosition: 'outside',
    color: 'white',
    display: "flex",
    flexDirection: "column",
    gap: "10px"
});

const StyledListItem = styled('li')({
    display: 'list-item',
    marginBottom: '8px',
    fontSize: '1rem',
    fontFamily: 'Roboto',
});

const Title = styled(Typography)({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h1"
});

const Subtitle = styled(Typography)({
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h2"
});

const Text = styled(Typography)({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
});

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiInputLabel-root': {
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
});

const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "0.5px solid white",
});


export default RSAAlgorithm;