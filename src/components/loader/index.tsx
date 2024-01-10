import React from "react";
import { StyledContainer, StyledLoader } from "./styles";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducers";


const Loader = ()=>{
    const loaderState = useSelector((state:ReduxState)=>state.loader);
    return (
        <>
            {loaderState.visibility && <StyledContainer>
                <StyledLoader
                    src='/assets/images/loader.gif'
                />
            </StyledContainer>}
        </>
        
    )
}

export default Loader;