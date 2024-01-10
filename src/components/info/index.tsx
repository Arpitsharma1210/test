import React from "react";
import { StyledInfoContainer, StyledInfoContent, StyledInfoContentContainer, 
    StyledInfoIconContainer } from "./styles";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface Props {
    text?:string;
    renderContent ?: ()=>JSX.Element;
}

const Info:React.FC<Props> = ({
    text, renderContent
})=>{

    return(
        <StyledInfoContainer>
            <StyledInfoIconContainer>
                <InfoOutlinedIcon
                    fontSize="medium"
                />
            </StyledInfoIconContainer>
            <StyledInfoContentContainer>
                {text && <StyledInfoContent variant="body2">{text}</StyledInfoContent>}
                {renderContent && renderContent()}
            </StyledInfoContentContainer>
        </StyledInfoContainer>
    )
}

export default Info;