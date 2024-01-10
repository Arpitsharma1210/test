import React from 'react';
import { Grid, SxProps, Theme } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { AccordionTitle, StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from './styles';
import { fontSize } from '../../theme/style.typography';
import { brand } from '../../theme/style.palette';


interface Props {
    children: (JSX.Element | JSX.Element[]);
    header?: (JSX.Element | JSX.Element[]);
    headerCss?: SxProps<Theme>;
    detailsCss?: SxProps<Theme>;
    title?: string;
    defaultExpanded?:boolean;
}

const Accordion: React.FC<Props> = ({
    header, title, children,
    detailsCss, headerCss,
    defaultExpanded
}) => {
    return (
        <StyledAccordion
            defaultExpanded={defaultExpanded}
        >
            <StyledAccordionSummary
                sx={headerCss}
                expandIcon={
                    <ExpandMoreRoundedIcon
                        style={{
                            fontSize : fontSize.h3,
                            color : brand.secondaryMain
                        }}
                    />
                }
            >
                {header}
                {title && (
                    <Grid
                        container
                        alignItems={'center'}
                        justifyContent={'space-between'}
                   
                    >
                        <Grid item>
                            <AccordionTitle variant='subtitle1'>
                                {title}
                            </AccordionTitle>
                        </Grid>
                    </Grid>
                )}
            </StyledAccordionSummary>
            <StyledAccordionDetails sx={detailsCss}>
                {children}
            </StyledAccordionDetails>
        </StyledAccordion>
    )
}

export default Accordion;