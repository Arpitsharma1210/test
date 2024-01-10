import React from 'react';
import { Alert, Button, Grid, Link, Typography } from '@mui/material';
import md5 from 'md5';
import { Container, Form, FormError, FormRow, FormRowItem, MaterialTextInput, PasswordTextInput } from '../../components';
import { StyledForm, StyledFormContainer, StyledFormHeading, StyledFormSubHeading, StyledInfoContainer, StyledScreenWrapper } from './styles';
import { emailValidator, required, routes } from '../../utils';
import { useFormReducer } from '../../hooks';
import messages from '../../messages';
import { login } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { fontSize } from '../../theme/style.typography';
import SidePanel from './sidePanel';
import { push } from 'connected-react-router';


const validators = {
    email: [required(messages?.login?.form?.errors?.emailRequired), emailValidator],
    password: [required(messages?.login?.form?.errors?.passwordRequired)],
};




const Login = () => {
    const {
        submitting, submitError,
        handleSubmit, connectField, setSubmitError
    } = useFormReducer(validators);
    const reduxDispatch = useDispatch();

    const onSubmit = (data: any) => (
        
        new Promise<any>((resolve, reject) => {
            reduxDispatch(push(routes.dashboard.root))
        }).then(() => {

        }).catch((error) => {
            setSubmitError(error?.message)
        })
        );

    return (
        <Container hideHeader hideSidebar noPadding>
            <StyledScreenWrapper>
                <SidePanel />
                <StyledFormContainer>
                    <StyledInfoContainer>
                        <StyledFormHeading variant='h2'>
                            {messages?.login?.heading}
                        </StyledFormHeading>
                        <StyledFormSubHeading>
                            {messages?.login?.subHeading}
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
                             <Link href={routes.forgotPassword}>{messages?.login?.form?.forgotPassword}</Link>
                            </FormRowItem>
                        </FormRow>
                        {submitError && <FormRow>
                            <FormRowItem>
                                <FormError
                                    message={messages?.login?.form?.errors?.invalidDetails}
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
                                    {messages?.login?.form?.logIn}
                                </Button>
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem justifyContent={'flex-end'} alignItems={'center'} gap={'4px'}>
                                <Typography sx={{ fontSize: fontSize.b2 }}>
                                    {messages?.login?.form?.dontHaveAccount}
                                </Typography>
                                <Link href={routes.signup}>{messages?.login?.form?.signUp}</Link>
                            </FormRowItem>
                        </FormRow>
                    </Form>
                </StyledFormContainer>
            </StyledScreenWrapper>
        </Container>
    )
}

export default Login;