import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    width: 100%;
    height: 100px;
    position: relative;

    align-items: center;
`

export const SearchInput = styled.TextInput.attrs({
    placeholder: 'Pesquisar'
})`
    width: 90%;
    height: 40px;
    padding-left: 10px;
    border: 1px solid ${globalTheme.COLORS.GRAY_10};
    border-radius: 4px;

    background-color: ${globalTheme.COLORS.WHITE};
`

export const SearchIcon = styled.Image`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 8%;
    top: 10%;
`