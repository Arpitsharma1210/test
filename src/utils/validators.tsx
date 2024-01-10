/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import moment from 'moment';
import { ErrorMessage, Validator } from '../hooks';
import messages from '../messages';

export const required = (
  errMessage: string,
): Validator => (
  value: any,
): ErrorMessage => (
  !value || value.length === 0
    ? errMessage : undefined);

export const requiredIf = (
  errMessage: string,
  callback: (formValues: any) => boolean,
): Validator => (value: any, formValues: any): ErrorMessage => {
  if (callback(formValues)) {
    return required(errMessage)(value);
  }
  return undefined;
};
export const emailValidator = (
  value?: string,
): ErrorMessage => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? messages?.general?.errors?.invalidEmail
    : undefined);

export const confirmPassword = (
  errMessage: string,
  validateWith = 'password',
): Validator => (value: any, formValues: any): ErrorMessage => (
  value && formValues?.[validateWith]?.value !== value
    ? errMessage
    : undefined);

export const validateDate = (
  message: string,
) => (value?: string): ErrorMessage => (
  value && !moment(value).isValid()
    ? message : undefined);

export const validateFutureDate = (
  message: string,
) => (value?: string): ErrorMessage => {
  const today = moment();
  return (
    (value && !moment(value).isValid())
      || moment(value).isBefore(today)
      ? message
      : undefined
  );
};

export const validatePastDate = (
  message: string,
) => (value?: string): ErrorMessage => {
  const today = moment();
  return (
    (value && !moment(value).isValid())
      || moment(value).isAfter(today)
      ? message
      : undefined
  );
};

export const numberValidator = (
  message: string,
) => (value?: string): ErrorMessage => (
  value && !/^[0-9]+$/i.test(value)
    ? message
    : undefined);

export const passwordValidator = (
  value?: string,
): ErrorMessage => (
  value && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/i.test(value)
    ? messages?.general?.errors?.invalidPassword
    : undefined);

export const decimalValidator = (
  message: string,
) => (value?: string): ErrorMessage => (
  value && !/^[0-9]\d*(\.\d+)?$/i.test(value)
    ? message
    : undefined);
