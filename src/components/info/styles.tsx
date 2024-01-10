import { Typography } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../../theme/style.palette";
import { fontWeight } from "../../theme/style.typography";


export const StyledInfoContainer = styled.div`
    display : flex;
    gap : 8px;
    background : ${colors.clientTagBgColor};
    color : ${colors.clientTagTextColor};
    padding : 16px;
    border-radius : 16px;
    border : 1px solid ${colors.clientTagTextColor};
`

export const StyledInfoIconContainer = styled.div`

`

export const StyledInfoContentContainer = styled.div`


`

export const StyledInfoContent = styled(Typography)`
    font-weight : ${fontWeight.medium} !important;
`