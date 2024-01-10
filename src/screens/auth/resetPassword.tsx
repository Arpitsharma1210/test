import React from 'react';
import { Alert, Button, Grid, Link, Typography } from '@mui/material';
import md5 from 'md5';
import { Container, Form, FormError, FormRow, FormRowItem, MaterialTextInput, PasswordTextInput, Toast } from '../../components';
import { StyledForm, StyledFormContainer, StyledFormHeading, StyledFormSubHeading, StyledInfoContainer, StyledScreenWrapper } from './styles';
import { HttpMethods, confirmPassword, passwordValidator, required, routes } from '../../utils';
import { useFormReducer } from '../../hooks';
import messages from '../../messages';
import { apiCall, login } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { fontSize } from '../../theme/style.typography';
import SidePanel from './sidePanel';
import { RESET_PASSWORD, RESET_PASSWORD_REQUEST_LINK } from '../../api';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { useParams } from 'react-router-dom';


const validators = {
    password: [required(messages?.login?.form?.errors?.passwordRequired), passwordValidator],
    confirmPassword: [
        required(messages?.signup?.form?.errors?.confirmPasswordRequired),
        confirmPassword(messages?.signup?.form?.errors?.confirmPasswordNotMatch)
    ],
};


const ResetPassword = () => {
    const {
        submitting, submitError,
        handleSubmit, connectField, setSubmitError
    } = useFormReducer(validators);
    const reduxDispatch = useDispatch();
    const {token} = useParams<{token?:string}>();

    const onSubmit = (data: any) => (
        new Promise<any>((resolve, reject) => {
            const sanitizedBody = {
                token,
                newPassword: md5(data.password),
            }
            reduxDispatch(apiCall(RESET_PASSWORD, resolve, reject,
                HttpMethods.POST, sanitizedBody))
        }).then(() => {
            toast(()=>(
                <Toast
                    subText={messages?.resetPassword?.form?.success}
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
                            {messages?.resetPassword?.heading}
                        </StyledFormHeading>
                        <StyledFormSubHeading>
                            {messages?.resetPassword?.subHeading}
                        </StyledFormSubHeading>
                    </StyledInfoContainer>
                    <Form 
                        onSubmit={handleSubmit(onSubmit)}
                        style={{padding : '24px 0px', width: '352px'}}
                    >
                      <FormRow>
                            <FormRowItem>
                                {connectField('password', {
                                    label: messages?.login?.form?.password,
                                    required: true,
                                })(PasswordTextInput)}
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem>
                                {connectField('confirmPassword', {
                                    label: messages?.resetPassword?.form?.confirmPassword,
                                    required: true,
                                })(PasswordTextInput)}
                            </FormRowItem>
                        </FormRow>
                        {submitError && <FormRow>
                            <FormRowItem>
                                <FormError
                                    message={messages?.resetPassword?.form?.errors?.invalidDetails}
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
                                    {messages?.resetPassword?.form?.submitCta}
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

export default ResetPassword;