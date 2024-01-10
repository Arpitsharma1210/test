import React from "react";
import { StyledInputContainer } from "../materialTextInput/styles";
import { Checkbox, FormControlLabel } from "@mui/material";

import { StyledCheckImg, StyledLabel } from "./styles";
import { StyledError } from "../textInput/styles";

interface Props {
    label?: (string | JSX.Element);
    value?: boolean;
    onChange?: any;
    error?: string;
    disableErrorMode?: boolean;
}

const CheckedIcon: React.FC<{ checked?: boolean }> = ({
    checked
}) => {
    return (
        <StyledCheckImg
            src={`/assets/images/${checked ? 'checkbox-selected.png' : 'checkbox-not-selected.png'}`}
        />
    );
};

const MuiCheckBox: React.FC<Props> = ({
    label, value, onChange,
    error, disableErrorMode
}) => {
    const labelIsString = typeof label === 'string';
    return (
        <StyledInputContainer>
            <FormControlLabel
                sx={{
                    marginLeft : '-8px'
                }}
                label={(labelIsString ? (
                    <StyledLabel variant="body2">{label}</StyledLabel>
                ) : label)}
                control={
                    <Checkbox
                        checkedIcon={<CheckedIcon checked />}
                        icon={<CheckedIcon />}
                        checked={!!value}
                        onChange={() => {
                            if (onChange) {
                                onChange(!value)
                            }
                        }}
                    />
                }
            />
            {!disableErrorMode && error && <StyledError variant='body2'>{error}</StyledError>}
        </StyledInputContainer>
    )
}

export default MuiCheckBox;