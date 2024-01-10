import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { brand } from '../../theme/style.palette';
import { fontWeight } from '../../theme/style.typography';
import { respondTo } from '../../theme/style.layout';

export const Logo = styled.img`
    width:224px;
    margin-bottom:32px;
`

export const StyledHeading = styled(Typography)`
    margin-bottom : 24px !important;
`



export const StyledPanel = styled.div`
    display: flex;
    align-items: flex-end;
    width: 500px;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/assets/images/auth-side-panel.svg');
    background-color: ${brand.primaryMain};
    ${respondTo.lgDown}{
        width: 432px;
    }
`

export const StyledLogo = styled.img`
    width : 170px;
`

export const StyledGridContainer = styled(Grid)`
    padding: 48px 32px;
`

export const StyledPanelInfo = styled(Typography)`
    color: ${brand.secondaryMain};
`
export const StyledLinkContainer = styled(Grid)`
    display: flex;
    margin-top: 24px !important;
    gap: 16px;
`
export const StyledFormContainer = styled.div<{numberOfColumn?:number}>`
    margin: 0 auto;
    min-width: ${({numberOfColumn})=>(numberOfColumn || 1) * 352}px;
    align-self: center;
`
export const StyledInfoContainer = styled.div`
`
export const StyledFormHeading = styled(Typography)`
    
`
export const StyledFormSubHeading = styled(Typography)`
    margin-top : 3px  !important;
    font-weight : ${fontWeight.medium}  !important;
    max-width : 352px;
`
export const StyledForm = styled.form`
    padding : 24px 0px;
`

export const StyledScreenWrapper = styled.div`
    display : flex;
    gap: 64px;
    padding-right: 32px;
`