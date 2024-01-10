import { css, styled } from 'styled-components';
import { Typography } from '@mui/material';
import { brand, colors } from '../../theme/style.palette';
import { respondTo } from '../../theme/style.layout';
import { fontSize } from '../../theme/style.typography';

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`

export const StyledActionItemContainer = styled.div<{justifyContent?:string}>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: ${({justifyContent})=>justifyContent || 'flex-start'};
    gap: 16px;
    ${respondTo.smOnly}{
        flex-direction: column;
        align-items: baseline;
    }
`

export const StyledActionItem = styled.div<{lastItem?:boolean}>`

    ${({lastItem})=>lastItem&&css`
       
    `}
    ${respondTo.smOnly}{
        margin: 8px 0px;
    }
`

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${colors.grey50};
    border-radius: 10px;
    &:hover {
        border-color: ${brand.primaryMain};
    }
    &:focus-within{
        border-color: ${brand.primaryMain};
    }

`

export const StyledSearchInput = styled.input`
    min-width: 344px;
    padding : 12px 0px;
    border: none;
    outline: none;
    font-size:${fontSize.b2};
    line-height: 24px;
    border-radius: 10px;
    color:  ${brand.textColour};
    font-size : ${fontSize.b1};
    &::placeholder {
        color:  ${colors.grey100};
    }
`