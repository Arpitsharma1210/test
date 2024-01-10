import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import { respondTo } from '../../theme/style.layout';
import { brand, colors } from '../../theme/style.palette';

export const StyledCard = styled(Card) <{}>`
    ${respondTo.smOnly}{
       
   }
`

export const StyledCardContent = styled(CardContent)`
   padding : 16px !important;
    ${respondTo.smOnly}{
       
   }
`

export const StyledCardHeader = styled.div<{noHeaderPadding?:boolean}>`
    padding : ${({noHeaderPadding})=>noHeaderPadding? '0px' : '16px'} !important;
    background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%);
    position : relative;
    ${respondTo.smOnly}{
  
   }
`
export const CardTitle = styled(Typography)`
    color : ${colors.grey10};
`