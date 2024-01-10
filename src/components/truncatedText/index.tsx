import React, { useLayoutEffect, useRef, useState } from "react";
import { StyledContainer, StyledCtaContainer, StyledText, StyledTextContainer } from "./styles";
import Chip from "../chip/chip";
import messages from "../../messages";
import { colors } from "../../theme/style.palette";

interface Props {
    text : string;
    hideLoadMore ?: boolean;
}

const getNumberAllowedChars = (width:number, widthPerChar = 6.7)=>{
    return Math.floor(width/widthPerChar)
}

const TruncatedText:React.FC<Props> = ({
    text, hideLoadMore
})=>{
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(true);
    useLayoutEffect(() => {
        const updateWidth = () => {
            const newWidth = textRef?.current?.clientWidth;
            setWidth(newWidth);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []); 
    const allowedChars = getNumberAllowedChars(width);
    const requiresTruncate = allowedChars<text?.length;
    const toggleTruncate = ()=>{
        setIsTruncated(prev=>!prev);
    }
    return(
        <StyledContainer>
            <StyledTextContainer ref={textRef}>
                <StyledText>
                    {(isTruncated && requiresTruncate ) ? `${text?.substring(0,allowedChars)}...` : text}
                </StyledText>
            </StyledTextContainer>
            {(requiresTruncate && !hideLoadMore) &&(
                <StyledCtaContainer
                    onClick={toggleTruncate}
                >
                    <Chip
                        bgColor={colors.clientTagBgColor}
                        textColor={colors.clientTagTextColor}
                        text= {messages.general?.[isTruncated? 'loadMore' : 'showLess']}
                    />
                </StyledCtaContainer>
            )}
        </StyledContainer>
    )
}

export default TruncatedText;