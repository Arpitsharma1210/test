import React from 'react';
import { Alert, Button, Grid, Link, Typography } from '@mui/material';
import md5 from 'md5';
import { Container, Form, FormError, FormRow, FormRowItem, MaterialTextInput, PasswordTextInput, Toast } from '../../components';
import { StyledForm, StyledFormContainer, StyledFormHeading, StyledFormSubHeading, StyledInfoContainer, StyledScreenWrapper } from './styles';
import { HttpMethods, emailValidator, required, routes } from '../../utils';
import { useFormReducer } from '../../hooks';
import messages from '../../messages';
import { apiCall, login } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { fontSize } from '../../theme/style.typography';
import SidePanel from './sidePanel';
import { RESET_PASSWORD_REQUEST_LINK } from '../../api';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';


const validators = {
    email: [required(messages?.login?.form?.errors?.emailRequired), emailValidator],
};


const ForgotPassword = () => {
    const {
        submitting, submitError,
        handleSubmit, connectField, setSubmitError
    } = useFormReducer(validators);
    const reduxDispatch = useDispatch();

    const onSubmit = (data: any) => (
        new Promise<any>((resolve, reject) => {
            reduxDispatch(apiCall(RESET_PASSWORD_REQUEST_LINK, resolve, reject,
                HttpMethods.POST, {email : data?.email}))
        }).then(() => {
            toast(()=>(
                <Toast
                    subText={messages?.forgotPassword?.form?.success}
                />
            ))
            setTimeout(()=>{
                reduxDispatch(push(routes.login))
            },2000)
        }).catch((error) => {
            setSubmitError(error?.message)
        }));

    return (
        <Container hideHeader hideSidebar noPadding>
            <StyledScreenWrapper>
                <SidePanel />
                <StyledFormContainer>
                    <StyledInfoContainer>
                        <StyledFormHeading variant='h2'>
                            {messages?.forgotPassword?.heading}
                        </StyledFormHeading>
                        <StyledFormSubHeading>
                            {messages?.forgotPassword?.subHeading}
                        </StyledFormSubHeading>
                    </StyledInfoContainer>
                    <Form 
                        onSubmit={handleSubmit(onSubmit)}
                        style={{padding : '24px 0px'}}
                    >
                        <FormRow>
                            <FormRowItem>
                                {connectField('email', {
                                    label: messages?.login?.form?.email,
                                    required: true,
                                })(MaterialTextInput)}
                            </FormRowItem>
                        </FormRow>
                        {submitError && <FormRow>
                            <FormRowItem>
                                <FormError
                                    message={messages?.forgotPassword?.form?.errors?.invalidDetails}
                                />
                            </FormRowItem>
                        </FormRow>}
                        <FormRow>
                            <FormRowItem justifyContent={'flex-end'}>
                                <Button
                                    variant="contained"
                                    type='submit'
                                    disabled={submitting}
                                >
                                    {messages?.forgotPassword?.form?.submitCta}
                                </Button>
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem justifyContent={'flex-end'} alignItems={'center'} gap={'4px'}>
                                <Typography sx={{ fontSize: fontSize.b2 }}>
                                    {messages?.signup?.form?.alreadyHaveAccount}
                                </Typography>
                                <Link href={routes.login}>{messages?.signup?.form?.logIn}</Link>
                            </FormRowItem>
                        </FormRow>
                    </Form>
                </StyledFormContainer>
            </StyledScreenWrapper>
        </Container>
    )
}

export default ForgotPassword;