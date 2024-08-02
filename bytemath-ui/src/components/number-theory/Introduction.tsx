import {CoursePageMainContainer, StyledList, StyledListItem, StyledText, Title} from "../styles/StyledComponents";


const Introduction = () => {

    return (
        <CoursePageMainContainer>
            <Title>Introduction to the Theory of Numbers</Title>
            <StyledText>The Theory of Numbers, also known as Number Theory, is a branch of pure mathematics devoted primarily
                to the study of the integers and integer-valued functions. It is one of the oldest and most fundamental
                areas of mathematics, with a rich history dating back to ancient civilizations.</StyledText>
            <Title>Key Concepts in Number Theory:</Title>
            <StyledList sx={{listStyleType: 'disc'}}>
                <StyledListItem>Prime Numbers: Numbers greater than 1 that have no positive divisors other than 1
                    and
                    themselves.</StyledListItem>
                <StyledListItem>Divisibility: The study of when one integer is divisible by
                    another.</StyledListItem>
                <StyledListItem>Greatest Common Divisor (GCD): The largest positive integer that divides each of the
                    numbers without a remainder.</StyledListItem>
                <StyledListItem>Least Common Multiple (LCM): The smallest positive integer that is divisible by each
                    of
                    the numbers.</StyledListItem>
                <StyledListItem>Modular Arithmetic: Arithmetic that deals with the remainders after
                    division.</StyledListItem>
                <StyledListItem>Diophantine Equations: Polynomial equations where only integer solutions are
                    sought.</StyledListItem>
            </StyledList>
            <Title>Applications of Number Theory:</Title>
            <StyledList sx={{listStyleType: 'disc'}}>
                <StyledListItem>Cryptography: Many encryption methods, including RSA, are based on number theory
                    principles.</StyledListItem>
                <StyledListItem>Computer Science: Algorithms, data structures, and error-correcting codes often rely
                    on
                    number theory
                    concepts.</StyledListItem>
                <StyledListItem>Physics: Number theory is used in various areas of theoretical physics, including
                    string
                    theory.</StyledListItem>
                <StyledListItem>Engineering: Applications in signal processing, control theory, and other
                    engineering
                    fields.</StyledListItem>
            </StyledList>
            <StyledText>Number theory continues to be an active area of research, with many unsolved problems and conjectures
                that have puzzled mathematicians for centuries.</StyledText>
        </CoursePageMainContainer>
    )
}



export default Introduction;