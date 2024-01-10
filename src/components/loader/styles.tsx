import { styled } from "styled-components";


export const StyledContainer = styled.div`
    position : fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(17.5px);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledLoader = styled.img`
    width: 100px;
    height: auto;
`