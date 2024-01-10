import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid, Link, Typography } from '@mui/material';
import md5 from 'md5';
import { Container, MaterialAutocompleteInput, 
    MaterialTextInput, PasswordTextInput, 
    MuiCheckBox, Form, FormRow, FormRowItem, FormError } from '../../components';
import { StyledFormContainer, StyledFormHeading, 
    StyledFormSubHeading, StyledInfoContainer, StyledScreenWrapper } from './styles';
import { HttpMethods, confirmPassword, emailValidator, passwordValidator, required, routes } from '../../utils';
import { useFormReducer, useOptions } from '../../hooks';
import messages from '../../messages';
import { apiCall, updateToken } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { fontSize } from '../../theme/style.typography';
import SidePanel from './sidePanel';
import { SIGN_UP } from '../../api';
import { push } from 'connected-react-router';


const validators = {
    firstName: [required(messages?.signup?.form?.errors?.firstNameRequired)],
    lastName: [required(messages?.signup?.form?.errors?.lastNameRequired)],
    email: [required(messages?.login?.form?.errors?.emailRequired), emailValidator],
    password: [required(messages?.login?.form?.errors?.passwordRequired), passwordValidator],
    confirmPassword: [
        required(messages?.signup?.form?.errors?.confirmPasswordRequired),
        confirmPassword(messages?.signup?.form?.errors?.confirmPasswordNotMatch)
    ],
};


const Signup = () => {

    const {
        submitting, submitError,
        handleSubmit, connectField, setSubmitError
    } = useFormReducer(validators);
    const reduxDispatch = useDispatch();

    const onSubmit = async (data: any) => {

        return new Promise<any>((resolve, reject) => {
            reduxDispatch(push(routes.dashboard.root))
        }).then((res) => {
            reduxDispatch(updateToken(res?.token));
        }).catch((error) => {
            setSubmitError(error?.message)
        });
    }

    return (
        <Container hideHeader hideSidebar noPadding>
            <StyledScreenWrapper>
                <SidePanel />
                <StyledFormContainer numberOfColumn={2}>
                    <StyledInfoContainer>
                        <StyledFormHeading variant='h2'>
                            {messages?.signup?.heading}
                        </StyledFormHeading>
                        <StyledFormSubHeading>
                            {messages?.signup?.subHeading}
                        </StyledFormSubHeading>
                    </StyledInfoContainer>
                    <Form 
                        onSubmit={handleSubmit(onSubmit)}
                        style={{padding : '24px 0px', maxWidth : '776px'}}
                    >
                        <FormRow>
                            <FormRowItem>
                                {connectField('firstName', {
                                    label: messages?.signup?.form?.firstName,
                                    required: true,
                                })(MaterialTextInput)}
                            </FormRowItem>
                            <FormRowItem>
                                {connectField('middleName', {
                                    label: messages?.signup?.form?.middleName,
                                })(MaterialTextInput)}
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem>
                                {connectField('lastName', {
                                    label: messages?.signup?.form?.lastName,
                                    required: true,
                                })(MaterialTextInput)}
                            </FormRowItem>
                            <FormRowItem>
                                {connectField('email', {
                                    label: messages?.signup?.form?.email,
                                    required: true,
                                })(MaterialTextInput)}
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem>
                                {connectField('password', {
                                    label: messages?.signup?.form?.password,
                                    required: true,
                                })(PasswordTextInput)}
                            </FormRowItem>
                            <FormRowItem>
                                {connectField('confirmPassword', {
                                    label: messages?.signup?.form?.confirmPassword,
                                    required: true,
                                })(PasswordTextInput)}
                            </FormRowItem>
                        </FormRow>
                        {submitError && <FormRow>
                            <FormRowItem>
                                <FormError
                                    message={messages?.signup?.form?.errors?.serverErrors?.[submitError]}
                                />
                            </FormRowItem>
                        </FormRow>}
                        <FormRow>
                            <FormRowItem alignItems={'center'} gap={'4px'}>
                                <Typography sx={{ fontSize: fontSize.b2 }}>
                                    {messages?.signup?.form?.alreadyHaveAccount}
                                </Typography>
                                <Link href={routes.login}>{messages?.signup?.form?.logIn}</Link>
                            </FormRowItem>
                            <FormRowItem justifyContent={'flex-end'}>
                                <Button
                                    variant="contained"
                                    type='submit'
                                    disabled={submitting}
                                >
                                    {messages?.signup?.form?.create}
                                </Button>
                            </FormRowItem>
                        </FormRow>
                    </Form>
                </StyledFormContainer>

            </StyledScreenWrapper>
        </Container>
    )
}

export default Signup;