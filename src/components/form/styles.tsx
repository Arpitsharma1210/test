import { Alert, Grid } from "@mui/material"
import { styled } from "styled-components"


export const StyledForm = styled.form`
    
`

export const StyledFormRow = styled(Grid)`
    gap : 16px;
    margin-bottom : 16px;
`
export const StyledFormRowItem = styled(Grid)`
    display : flex;
    flex : 1;
`

export const StyledFormError = styled(Alert)`
    width: 100% !important
`