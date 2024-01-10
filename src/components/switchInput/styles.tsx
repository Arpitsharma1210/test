import { FormControlLabel } from "@mui/material";
import { styled } from "styled-components";
import { baseFontFamily, fontSize, fontWeight } from "../../theme/style.typography";
import { brand, colors } from "../../theme/style.palette";

export const StyledFormControlLabel = styled(FormControlLabel)`
    margin-left : 0px !important;
    .MuiFormControlLabel-label {
        font-size: ${fontSize.b1};
        font-weight: ${fontWeight.medium};
        font-family: ${baseFontFamily};
        color: ${colors.grey100};
    }
`