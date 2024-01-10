import { css, styled } from "styled-components"
import { brand, colors } from "../../../theme/style.palette"
import { fontSize, fontWeight } from "../../../theme/style.typography"

export const StyledContainer = styled.div<{sidebarOpen:boolean}>`
    width:${({sidebarOpen})=> sidebarOpen ? 264 : 112}px;
    min-height: calc(100vh - 32px);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    border-radius: 22px;
    background-color: ${colors.white};
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05), 0px 0px 15px 0px rgba(40, 41, 61, 0.03);
`

export const StyledMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px;
    border-radius: 22px;
    background-color: ${colors.white};
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05), 0px 0px 15px 0px rgba(40, 41, 61, 0.03);
    flex-direction: column;
    margin-top : 24px;
    flex : 1;
    padding-top: 56px;
    position:relative;
`

export const StyledLogo = styled.img`
width:80%;
height:40px;

`

export const StyledMenuListContainer = styled.div`
    display: flex;
    flex : 1;
    flex-direction: column;
    gap: 16px;
`

export const StyledMenuListItemContainer = styled.a<{active?:boolean, sidebarOpen?:boolean}>`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    padding : 12px 16px;
    border-radius: 10px;
    color : ${colors.grey100};
    font-size : ${fontSize.b1};
    font-weight : ${fontWeight.medium};
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    ${({active})=>active && css`
    background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%);
        color : ${colors.grey10};
        font-weight : ${fontWeight.bold};
    `}
    ${({sidebarOpen})=>!sidebarOpen && css`
        padding : 12px 24px;
        justify-content: center;
    `}

`

export const StyledMenuItemIcon = styled.img<{active?:boolean}>`
    width : 18px;
    height : 18px;
    filter: grayscale(100%) brightness(28%) hue-rotate(-190deg) saturate(720%) contrast(0.8);
    ${({active})=>active && css`
        filter : none;
    `}
`
export const StyledMenuItemLabel = styled.span`
   

`

export const StyledLogoutContainer = styled.div`

`

export const StyledMenuToggleContainer = styled.div`
    background-color : ${brand.secondaryMain};
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    right: -10px;
    cursor : pointer;
`
