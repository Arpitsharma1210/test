import React, { useEffect } from "react";
import messages from "../../../messages";
import { HttpMethods, confirmPassword, passwordValidator, required } from "../../../utils";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../redux/reducers";
import { useFormReducer } from "../../../hooks";
import md5 from "md5";
import { CHANGE_PASSWORD } from "../../../api";
import { apiCall } from "../../../redux/actions";
import { toast } from "react-toastify";
import Toast from "../../toast";
import { Form, FormError, FormRow, FormRowItem } from "../../form";
import { PasswordTextInput } from "../..";
import { Button } from "@mui/material";


interface Props {
    onSuccess: () => void;
    onCancel: () => void;
}

const validators = {
    oldPassword: [required(messages?.changePassword?.errors?.oldPasswordRequired)],
    password: [required(messages?.login?.form?.errors?.passwordRequired), passwordValidator],
    confirmPassword: [
        required(messages?.signup?.form?.errors?.confirmPasswordRequired),
        confirmPassword(messages?.signup?.form?.errors?.confirmPasswordNotMatch)
    ],
}


const ChangePasswordForm: React.FC<Props> = ({
    onSuccess, onCancel
}) => {
    const reduxDispatch = useDispatch();
    const userProfile = useSelector(((state: ReduxState) => state.userProfile));
    const {
        submitting, submitError,
        handleSubmit, connectField,
        change, setSubmitError,
    } = useFormReducer(validators);

    const onSubmit = async (data: any) => {
        return new Promise<any>(async (resolve, reject) => {
            const sanitizedBody: any = {
                oldPassword: md5(data?.oldPassword),
                newPassword: md5(data?.password),
                practiceTypeId: data?.practiceType?.id?.toString(),
            };
            reduxDispatch(apiCall(
                CHANGE_PASSWORD, resolve, reject,
                HttpMethods.POST, sanitizedBody
            ))

        }).then(() => {
            onSuccess();
            toast(() => (
                <Toast
                    text={messages?.changePassword?.success?.text}
                    subText={messages?.changePassword?.success?.subText}
                />
            ))
        }).catch((error) => {
            setSubmitError(error?.message)
        });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormRowItem>
                    {connectField('oldPassword', {
                        label: messages?.changePassword?.oldPassword,
                        required: true,
                    })(PasswordTextInput)}
                </FormRowItem>
            </FormRow>
            <FormRow>
                <FormRowItem>
                    {connectField('password', {
                        label: messages?.changePassword?.newPassword,
                        required: true,
                    })(PasswordTextInput)}
                </FormRowItem>
            </FormRow>
            <FormRow>
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
                        message={messages?.changePassword?.errors?.serverErrors?.[submitError]}
                    />
                </FormRowItem>
            </FormRow>}
            <FormRow>
                <FormRowItem justifyContent={'flex-end'} gap={3}>
                    <Button
                        variant="outlined"
                        color='secondary'
                        onClick={onCancel}
                    >
                        {messages?.general?.cancel}
                    </Button>
                    <Button
                        variant="contained"
                        type='submit'
                        disabled={submitting}
                    >
                        {messages?.general?.saveChanges}
                    </Button>
                </FormRowItem>
            </FormRow>
        </Form>
    )
}

export default ChangePasswordForm;