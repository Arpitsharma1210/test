import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import styled, { css } from 'styled-components';
import { respondTo } from '../../theme/style.layout';
import { brand, colors } from '../../theme/style.palette';

export const StyledAccordion = styled(Accordion) <{}>`
    ${respondTo.smOnly}{
       
   }
`

export const StyledAccordionSummary = styled(AccordionSummary)`
    color : ${brand.secondaryMain};
    ${respondTo.smOnly}{
       
   }
`

export const StyledAccordionDetails = styled(AccordionDetails)`

    ${respondTo.smOnly}{
  
   }
`
export const AccordionTitle = styled(Typography)`

`