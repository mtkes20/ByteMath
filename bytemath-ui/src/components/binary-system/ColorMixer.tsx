import React, { useState } from 'react';
import { StyledCard, StyledText, Subtitle, StyledSlider } from "../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const ColorMixer = () => {
    const [red, setRed] = useState<number | number[]>(0);
    const [green, setGreen] = useState<number | number[]>(0);
    const [blue, setBlue] = useState<number | number[]>(0);
    const { t } = useTranslation();

    const handleChange = (color : 'red' | 'green' | 'blue', value: number | number[]) => {
        switch(color) {
            case 'red':
                setRed(value);
                break;
            case 'green':
                setGreen(value);
                break;
            case 'blue':
                setBlue(value);
                break;
            default:
                break;
        }
    };

    const colorBox = {
        width: '100px',
        height: '100px',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        margin: '20px auto',
        border: '1px solid white'
    };

    return (
        <StyledCard>
            <Subtitle>{t("binaryColorMixer")}</Subtitle>
            <div style={colorBox}></div>
            <StyledText>{`${t("red")}: ${red.toString(2).padStart(8, '0')}`}</StyledText>
            <StyledSlider
                value={red}
                onChange={(e, newValue) => handleChange('red', newValue)}
                min={0}
                max={255}
            />
            <StyledText>{`${t("green")}: ${green.toString(2).padStart(8, '0')}`}</StyledText>
            <StyledSlider
                value={green}
                onChange={(e, newValue) => handleChange('green', newValue)}
                min={0}
                max={255}
            />
            <StyledText>{`${t("blue")}: ${blue.toString(2).padStart(8, '0')}`}</StyledText>
            <StyledSlider
                value={blue}
                onChange={(e, newValue) => handleChange('blue', newValue)}
                min={0}
                max={255}
            />
        </StyledCard>
    );
};

export default ColorMixer;