import { css, styled } from 'styled-components';
import { Menu, MenuItem, Typography } from '@mui/material';
import { respondTo } from '../../../theme/style.layout';
import { brand, colors } from '../../../theme/style.palette';
import { fontSize, fontWeight } from '../../../theme/style.typography';

export const StyledContainer = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
    padding: 24px 0px;
    justify-content: space-between;
    margin-bottom : 24px;
    background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%), #E9E7FD;
    border-radius: 22px;
`

export const StyledHeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    ${respondTo.smOnly}{
        
    }
`

export const StyledHeadingText = styled(Typography)<{lightColor?:boolean}>`
    ${({lightColor})=>lightColor && css`
        color : ${colors.grey100};
    `}
`

export const StyledProfileContainer = styled.div`
    display: flex;
    align-items:center;
    gap : 16px;
`

export const StyledProfileInfoContainer = styled.div`

`
export const StyledProfileIconContainer = styled.div`
    display: flex;
    align-items:center;
    gap : 8px;
    cursor : pointer;
`

export const StyledProfileInfoText = styled(Typography)<{lightColor?:boolean}>`
    ${({lightColor})=>lightColor && css`
        color : ${colors.grey100};
    `}
`

export const StyledProfileInfoIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color : ${colors.white};
    display : flex;
    align-items : center;
    justify-content: center;
    font-size : ${fontSize.h5};
    font-weight : ${fontWeight.bold};
    color : ${brand.primaryMain};
    border-radius: 50%;
`
export const StyledGoBackContainer = styled.div`
    border : 1px solid ${brand.textColour};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 7px;    

`

export const StyledHeaderInfoContainer = styled.div`
    display: flex;
    align-items:center;
    gap : 16px;
    cursor: pointer;
`

export const StyledActionMenu = styled(Menu)`
    & .MuiPaper-root {
        margin-top: 16px !important;
        border-radius: 12px !important;
    }
    & .MuiList-root{
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }
`

export const StyledActionMenuItem = styled(MenuItem)<{noBorder?:boolean, trialPeriod?:boolean}>`
    border-bottom: ${({noBorder})=>noBorder ? 'none' : `1px solid ${colors.tableBorder}`}!important;
    padding : 12px 16px !important;
    min-width : 320px !important;
    ${({trialPeriod})=>trialPeriod && css`
        border-bottom : none !important;
        background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%), #E9E7FD;
        color : ${colors.tableBorder} !important;
        display: flex !important;;
        gap: 24px;
        align-items: center !important;
        justify-content: space-between !important;;
    `}
`

export const StyledTrialInfoContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const StyledTrialCta = styled.div`
    display: flex;
    align-items: center;
    padding : 4px 8px;
    cursor : pointer;
    border-radius: 32px;
    border:1px solid ${colors.tableBorder};
    font-size : ${fontSize.b3};
`