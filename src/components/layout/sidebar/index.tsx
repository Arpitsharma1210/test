import React, { useState } from "react";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { routes } from "../../../utils";
import { Right } from "../../../redux/reducers/auth";
import messages from "../../../messages";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../../../redux/actions";
import { StyledContainer, StyledLogo, StyledLogoContainer, 
    StyledLogoutContainer, StyledMenuContainer, StyledMenuItemIcon, 
    StyledMenuItemLabel, StyledMenuListContainer, StyledMenuListItemContainer, 
    StyledMenuToggleContainer } from "./styles";
import { brand, colors } from "../../../theme/style.palette";
import { Icon } from "@mui/material";
import { push } from "connected-react-router";


interface Props {

}

const menuItems = [
    {
        key: 'dashboard',
        label: messages?.sidebar?.menuItems?.dashboard,
        icon: 'dashboard',
        path: routes.dashboard.root,
        right: Right.DASHBOARD,
    },


            {
                key: 'test',
                label: 'test',
                icon: 'dashboard',
                path: routes.test.root,
                right: Right.TEST,
            },
            
    // Add sidebar menu items here
]


const Sidebar:React.FC<Props> = ({

})=>{

    const reducxDispatch = useDispatch();
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(!!(window.innerWidth >= 1400));


    const toggleSidebar = ()=>{
        setSidebarOpen((prevValue)=>!prevValue);
    }

    return (
        <StyledContainer sidebarOpen={sidebarOpen}>
            <StyledLogoContainer>
                <StyledLogo
                    src={
                        sidebarOpen 
                        ? '/assets/images/logo.png'
                        : '/assets/images/smallLogo.png'
                    }
                />
            </StyledLogoContainer>
            <StyledMenuContainer>
                <StyledMenuToggleContainer
                    onClick={toggleSidebar}
                >
                    <Icon
                        component={sidebarOpen ? ChevronLeftRoundedIcon : ChevronRightRoundedIcon}
                        style={{
                            color : brand.primaryMain
                        }}
                    />
                </StyledMenuToggleContainer>
                <StyledMenuListContainer>
                    {menuItems.map(menuItem => {
                        const active = location.pathname.startsWith(menuItem.path);
                        return (
                            <StyledMenuListItemContainer
                                active={active}
                                key={menuItem.key}
                                href={menuItem.path}
                                sidebarOpen={sidebarOpen}
                            >
                                <StyledMenuItemIcon
                                    src={`/assets/images/${menuItem.icon}.png`}
                                    active={active}
                                />
                                {sidebarOpen && <StyledMenuItemLabel>
                                    {menuItem.label}
                                </StyledMenuItemLabel>}
                            </StyledMenuListItemContainer>
                        )
                    })}
                </StyledMenuListContainer>
                <StyledLogoutContainer>
                    <StyledMenuListItemContainer 
                        href="javascript:void(0)"
                        style={{
                            justifyContent: 'center'
                        }}
                        // onClick={()=>reducxDispatch(logout())}
                        onClick={()=>{
                            reducxDispatch(push(routes.login))}}

                        sidebarOpen={sidebarOpen}
                    >
                        <StyledMenuItemIcon
                            src={`/assets/images/logout.png`}
                            active
                        />
                        {sidebarOpen && <StyledMenuItemLabel>
                            {messages?.sidebar?.logout}
                        </StyledMenuItemLabel>}
                    </StyledMenuListItemContainer>
                </StyledLogoutContainer>
            </StyledMenuContainer>
        </StyledContainer>
    )
}

export default Sidebar;