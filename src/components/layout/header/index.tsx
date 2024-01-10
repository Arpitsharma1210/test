import React, { useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { Typography } from '@mui/material';
import {
    StyledActionMenu,
    StyledActionMenuItem,
    StyledContainer,
    StyledGoBackContainer,
    StyledHeaderInfoContainer,
    StyledHeadingContainer,
    StyledHeadingText,
    StyledProfileContainer,
    StyledProfileIconContainer,
    StyledProfileInfoContainer,
    StyledProfileInfoIcon,
    StyledProfileInfoText,
    StyledTrialCta,
    StyledTrialInfoContainer,
} from "./styles"
import { useDispatch } from 'react-redux';
import { brand, colors } from "../../../theme/style.palette";
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux/reducers';
import { goBack, push } from 'connected-react-router';
import messages from '../../../messages';
import { routes } from '../../../utils';
import { usePopupReducer } from '../../../hooks';
import ChangePasswordForm from './changePasswordForm';
import Modal from '../../modal';



export interface Props {
    heading?: string;
    headingCount?: (string | number);
    showCount?: boolean;
    showGoBack?: boolean;
}



const Header: React.FC<Props> = ({
    heading, headingCount,
    showCount, showGoBack
}) => {

    const reduxDispatch = useDispatch();

    const {
        visibility: formVisibility,
        showPopup: showForm,
        hidePopup: hideForm
    } = usePopupReducer();

    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const openActionMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const closeActionMenu = (menuItemClick?:any) => {
        setMenuAnchorEl(null);
        if(menuItemClick){
            menuItemClick();
          }
    };

    const actions = [
        {
            id: 'changePassword',
            onClick: () => {
                showForm();
            }
        }
    ]

    return (
        <StyledContainer>
            <StyledHeaderInfoContainer>
                {showGoBack && <StyledGoBackContainer
                    onClick={() => {
                        reduxDispatch(goBack())
                    }}
                >
                    <WestRoundedIcon
                        style={{
                            color: brand.textColour,
                            fontSize: '24px'
                        }}
                    />
                </StyledGoBackContainer>}
                {heading && <StyledHeadingContainer>
                    <StyledHeadingText variant='h3'>
                        {heading}{showCount ? ':' : ''}
                    </StyledHeadingText>
                    {showCount && <StyledHeadingText variant='h3' lightColor>
                        {headingCount || 0}
                    </StyledHeadingText>}
                </StyledHeadingContainer>}
            </StyledHeaderInfoContainer>
            <StyledProfileContainer
            
            >
                <StyledProfileInfoContainer>
                    <StyledProfileInfoText variant='subtitle1'>
                        {''}
                    </StyledProfileInfoText>
                </StyledProfileInfoContainer>
                <StyledProfileIconContainer
                    onClick={openActionMenu}
                >
                    <StyledProfileInfoIcon>
                        <span>{"J"}</span>
                    </StyledProfileInfoIcon>
                    <ExpandMoreRoundedIcon
                        fontSize='large'
                        style={{
                            color: brand.primaryMain
                        }}
                    />
                </StyledProfileIconContainer>
            </StyledProfileContainer>
            <StyledActionMenu
                disableAutoFocusItem
                anchorEl={menuAnchorEl}
                open={!!menuAnchorEl}
                onClose={() => closeActionMenu()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                {actions.map((action,index) => (
                    <StyledActionMenuItem 
                        key={action.id} 
                        onClick={()=>closeActionMenu(action.onClick)}
                        noBorder={index===actions?.length-1}
                    >
                        <Typography>
                            {messages?.header?.menuItems?.[action?.id]}
                        </Typography>
                    </StyledActionMenuItem>
                ))}
            </StyledActionMenu>
            <Modal
                fitContent
                show={formVisibility}
                heading={messages?.changePassword?.heading}
                subHeading={messages?.changePassword?.subheading}
                onClose={hideForm}
            >
                <ChangePasswordForm
                    onCancel={hideForm}
                    onSuccess={() => {
                        hideForm();
                    }}
                />

            </Modal>
        </StyledContainer>
    )
}



export default Header;