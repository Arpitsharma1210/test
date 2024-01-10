import { styled } from "styled-components";
import { fontSize } from "../../theme/style.typography";


export const StyledContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
`

export const StyledTextContainer = styled.div`
    display: flex;
    flex: 1;
`

export const StyledText = styled.p`
    margin: 0;
    font-size : ${fontSize.b2};
`

export const StyledCtaContainer = styled.div`
    width: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor : pointer;
`