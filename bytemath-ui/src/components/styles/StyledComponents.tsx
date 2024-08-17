import {Button, Card, Stack, Slider, styled, TextField, Typography} from "@mui/material";

export const CoursePageSideMenuContainer = styled(Stack)({
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    overflowY: 'auto',
});

export const CoursePageMainContainer = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "30px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a",
    overflowY: "auto",
});

//TODO change name
export const SubContent = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
});

export const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    padding: "20px",
    border: "0.5px solid white",
    height: "fit-content"
});

export const StyledList = styled('ol')({
    listStylePosition: 'inside',
    paddingInlineStart: '0px',
    color: 'white',
    display: "flex",
    flexDirection: "column",
    gap: "15px"
});

export const StyledListItem = styled('li')({
    display: 'list-item',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    lineHeight: '1.5',
});

export const Title = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    // marginBottom: "20px",
    color: "white",
    fontFamily: "Roboto",
});

export const Subtitle = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
});

export const StyledText = styled(Typography)({
    fontSize: "1rem",
    marginBottom: "10px",
    color: "white",
    lineHeight: "1.5",
});

export const ResultText = styled(Typography)({
    color: "#5C6BC0",
    fontSize: "1rem",
    fontFamily: "Roboto",
});

export const Example = styled(Typography)(() => ({
    color: "lightblue",
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontStyle: "italic",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderLeft: "3px solid lightblue",
}));


export const StyledExplanation = styled(Typography)({
    fontSize: "1rem",
    marginBottom: "20px",
    fontStyle: "italic",
    color: "#b0bec5",
});

export const StyledInteractionPrompt = styled(Typography)({
    fontSize: "0.9rem",
    marginBottom: "10px",
    color: "#ffab91",
});

export const StyledBit = styled('button')<StyledBitProps>(({isOn}) => ({
    width: "50px",
    height: "50px",
    fontSize: "20px",
    cursor: "pointer",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    backgroundColor: isOn ? '#66bb6a' : '#ef5350',
    transition: "background-color 0.3s ease",
}));

interface StyledBitProps {
    isOn: boolean;
}

export const StyledCalculatorResult = styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.1rem",
    textAlign: "center",
    color: "#ffffff",
});

export const StyledOperatorCalculator = styled('div')({
    backgroundColor: "#2c2c2c",
    padding: "15px",
    borderRadius: "5px",
});

export const StyledOperatorCalculatorInput = styled('div')({
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "15px",
});

export const StyledTextField = styled(TextField)(() => ({
    size: "small",
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

export const StyledButton = styled(Button)({
    backgroundColor: "#800080",
    padding: "5px 10px",
    color: "#ffffff",
    fontFamily: "Roboto",
});


export const StyledTermItem = styled('li')<{ active?: boolean }>(({active}) => ({
    cursor: 'pointer',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: active ? 'orange' : '#dfe8d3',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: active ? '#orange' : '#ffffff',
        transform: 'translateX(5px)',
    },
}));

export const StyledTermList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
});

export const StyledGraphContainer = styled('div')({
    width: '100%',
    height: '400px',
    border: '1px solid #ccc',
    margin: '20px 0',
});

export const StyledSlider = styled(Slider)(({theme}) => ({
    color: "#800080",
    height: 8,

    '& .MuiSlider-thumb': {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        border: '3px solid #800080',
    },

    '& .MuiSlider-valueLabel': {
        backgroundColor: '#800080',
        color: '#fff',
    },

    '& .MuiSlider-mark': {
        height: 12,
        width: 3,
        borderRadius: 1,
    },
}));
