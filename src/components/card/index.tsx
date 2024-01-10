import React from 'react';
import { CardTitle, StyledCard, StyledCardContent, StyledCardHeader } from "./styles"
import { Grid, SxProps, Theme } from '@mui/material';


interface Props {
    children?: (JSX.Element | JSX.Element[]);
    header?: (JSX.Element | JSX.Element[]);
    cardCss?: SxProps<Theme>;
    contentCss?: SxProps<Theme>;
    headerCss?: React.CSSProperties;
    noHeader?: boolean;
    title?: string;
    noHeaderPadding?:boolean;
}

const Card: React.FC<Props> = ({
    header, children,
    cardCss, contentCss, headerCss,
    noHeader, title, noHeaderPadding
}) => {

    return (
        <StyledCard sx={cardCss}>
            {!noHeader && <StyledCardHeader style={headerCss} noHeaderPadding={noHeaderPadding}>
                {header}
                {title && (
                    <Grid 
                        container
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Grid item>
                            <CardTitle variant='subtitle1'>
                                {title}
                            </CardTitle>
                        </Grid>
                    </Grid>
                )}
            </StyledCardHeader>}
            <StyledCardContent sx={contentCss}>
                {children}
            </StyledCardContent>
        </StyledCard>
    )
}

export default Card;