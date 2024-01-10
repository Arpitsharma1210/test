import { css, styled } from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Select, Typography } from "@mui/material";
import { fontSize, fontWeight } from "../../theme/style.typography";
import { brand, colors } from "../../theme/style.palette";


export const StyledTableContainer = styled(TableContainer)`

`

export const StyledTable = styled(Table)`
    border-radius: 10px;
    background: ${colors.white};
    box-shadow: 0px 0px 15px 0px rgba(40, 41, 61, 0.03);
    overflow : hidden;

`

export const StyledTableHead = styled(TableHead)`
background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%), #6063EA;

`
export const StyledTableBody = styled(TableBody)`
    & tr:last-child {
        td {
            border-bottom : 0 !important;
        }
      }

`
export const StyledTableRow = styled(TableRow)`

`
export const StyledTableCell = styled(TableCell) <{ isHeading?: boolean; clickable?: boolean; centerAlign?:boolean }>`
    padding: 16px !important;
    border-bottom: ${({ isHeading }) => !isHeading ? `1px solid ${colors.tableBorder}` : 0} !important;
    color: ${({ isHeading }) => isHeading ? colors.grey10 : brand.textColour} !important;
    font-weight: ${({ isHeading }) => isHeading ? fontWeight.bold : fontWeight.regular} !important;
    font-size: ${fontSize.b1} !important;
    cursor: ${({ clickable }) => clickable ? 'pointer' : 'inherit'};
    text-align: ${({ centerAlign }) => centerAlign ? 'center' : 'left'} !important;
`

export const StyledCellContainer = styled.div`
    display: flex;
    column-gap: 8px;
`

export const StyledLoadmoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
`
export const StyledLoadmoreCta = styled(Typography)`
    font-size : ${fontSize.b3};
    color : ${brand.primaryMain};
    cursor:pointer;
`

export const StyledActionListContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

`

export const StyledActionItem = styled.div`
    color : ${brand.secondaryMain} !important; 
    cursor : pointer;
`

export const StyledNoDataInfoContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 120px;
`

export const StyledNoDataInfo = styled(Typography)`

`

export const StyledPaginationContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`

export const StyledPaginationLimitContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`
export const StyledInfo = styled(Typography)`
    color : ${colors.grey100};
`

export const StyledSelectPage = styled(Select)`
      & .MuiSelect-select {
        padding: 8px 16px;
        padding-right: 40px !important;
        color : ${brand.secondaryMain} !important;
      }

      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${colors.grey25} !important;
      }

      & .MuiSvgIcon-root{
        color : ${brand.secondaryMain} !important;
      }
`

export const StyledPagesContainer = styled.div`
    display: flex;
    gap: 4px;
`

export const StyledPageContainer = styled.div<{active?:boolean;}>`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 24px;
    cursor : pointer;
    background: ${colors.grey10};
    color : ${colors.grey100};
    ${({active})=>active&&css`
    background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%);
        color : ${colors.grey10};
    `}
`