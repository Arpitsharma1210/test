import React from 'react';
import { StyledChildrenContainer, StyledContainer, StyledContainerProps, StyledContentWrapper, StyledSideBarContainer } from "./styles"
import Header, {Props as HeaderProps} from '../header';
import Sidebar from '../sidebar';


interface Props extends StyledContainerProps, HeaderProps{
    children?:(JSX.Element|JSX.Element[]);
    hideHeader?:boolean;
    hideSidebar?:boolean;
    cardCss?:any;
    contentCss?:any;
}

const Container:React.FC<Props> = ({
    children, hideHeader,hideSidebar, 
    heading, headingCount,showCount,
    showGoBack, noPadding,
    ...styleProps
})=>{

    return (
        <StyledContainer noPadding={noPadding} {...styleProps}>
            {!hideSidebar && <StyledSideBarContainer>
                <Sidebar/>
            </StyledSideBarContainer>}
            <StyledContentWrapper noPadding={noPadding}>
                {!hideHeader && (<Header
                    heading={heading}
                    headingCount={headingCount}
                    showCount={showCount}
                    showGoBack={showGoBack}
                />)}
                <StyledChildrenContainer>
                    {children}
                </StyledChildrenContainer>
            </StyledContentWrapper>
        </StyledContainer>
    )
}

export default Container;