import { Container } from '@mui/material';
import styled, { css } from 'styled-components';
import { respondTo } from '../../../theme/style.layout';

export interface StyledContainerProps {
    centerAlign?:boolean;
    noPadding?:boolean;
}

export const StyledContainer = styled(Container)<StyledContainerProps>`
    align-items : ${({centerAlign})=>centerAlign?'center':'stretch'} !important;
    ${respondTo.smOnly}{
        padding: 0 !important;
    }
    ${respondTo.xlUp}{
        max-width : 100% !important;
    }
    ${({noPadding})=>noPadding&&css`
        padding: 0 !important;
    `}
`

export const StyledContentWrapper = styled.div<StyledContainerProps>`
    padding-left : 32px;
    width : 100%;
    ${({noPadding})=>noPadding&&css`
        padding: 0 !important;
    `}
`

export const StyledSideBarContainer = styled.div`
    display : flex;

`

export const StyledChildrenContainer = styled.div`
    width : 100%;
`