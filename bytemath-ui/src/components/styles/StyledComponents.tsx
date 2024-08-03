import {Button, Card, styled, TextField, Typography} from "@mui/material";


export const CoursePageMainContainer = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "30px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a"
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
    marginBottom: "20px",
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