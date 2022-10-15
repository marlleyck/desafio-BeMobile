import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: ${globalTheme.COLORS.WHITE};

`
export const UserName = styled.Text``

export const UserImage = styled.Image`
    width: 25px;
    height: 25px;

    border-radius: 50px;
`