import {Button, Card, Slider, Stack, styled, TextField, Typography} from "@mui/material";

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
    gap: "50px",
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
    overflow: "unset"
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

export const StyledCalculatorResult = styled('div')({
    fontSize: '26px',
    fontWeight: '700',
    color: '#f0f0f0',
    marginTop: '20px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
});

export const StyledOperatorCalculator = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#292929',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.35)',
    },
});

export const StyledOperatorCalculatorInput = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#333333',
    borderRadius: '10px',
    boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#444444',
    },
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
    backgroundColor: active ? 'orange' : '#bee6ed',
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
    backgroundColor: 'rgba(57,52,52,0.5)',
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

export const TruthTable = styled('table')({
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    backgroundColor: "#1e1e1e",
    border: "1px solid #444",
    marginTop: "20px",
    borderRadius: "8px",
});

export const TableHeader = styled('tr')({
    backgroundColor: "#2c2c2c",
});

export const HeaderCell = styled('th')({
    padding: "12px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#e0e0e0",
    border: "1px solid #444",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
});

export const TableRow = styled('tr')({
    '&:hover': {
        backgroundColor: "#333",
    },
});

export const TableCell = styled('td')({
    padding: "12px",
    textAlign: "center",
    border: "1px solid #444",
    color: "#e0e0e0",
});

export const ResultCell = styled('td')<{ isTrue: boolean }>(({ isTrue }) => ({
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold",
    color: isTrue ? "#4caf50" : "#f44336",
    border: "1px solid #444",
}));
