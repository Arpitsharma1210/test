import React from 'react';
import { Grid, Link } from '@mui/material';
import {
    StyledGridContainer, StyledLinkContainer,
    StyledLogo, StyledPanel, StyledPanelInfo
} from './styles';
import messages from '../../messages';

const SidePanel = () => (
    <StyledPanel>
        <StyledGridContainer container spacing={2} direction={'column'}>
            <Grid item>
                <StyledLogo src='' />
            </Grid>
            <Grid item>
                <StyledPanelInfo variant='h3'>{messages?.authPanel?.info}</StyledPanelInfo>
            </Grid>
            <StyledLinkContainer item>
                <Link href='#'>{messages?.general?.faq}</Link>
                <Link href='#'>{messages?.general?.healthAndSupport}</Link>
            </StyledLinkContainer>
        </StyledGridContainer>
    </StyledPanel>
)

export default SidePanel;