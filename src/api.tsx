/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { HttpMethods } from './utils';
import { config } from './config';
import { getToken } from './redux/reducers/auth';

const PING = '/api/ping';
const LOGIN = '/api/login';
export const SIGN_UP = '/api/signup';
export const SET_PASSWORD = '/api/set-password';
export const RESET_PASSWORD = '/api/reset-password';
export const RESET_PASSWORD_REQUEST_LINK = '/api/request-reset-password-link';
export const PRACTICE_TYPES = "/api/practice-types";
export const USER_PROFILE = "/api/clinic/user-profile";
export const CHANGE_PASSWORD = "/api/change-password";
export const CLINIC_PROFILE = "/api/clinic/profile";

export const TESTLISTINGAPI = '/api/testlisting';
// Add your api calls here

export const apiCall = (
  endpoint: string,
  method = HttpMethods.GET,
  body?: any,
  isFormData?: boolean,
): Promise<any> => {
  const headers = new Headers({
    Accept: 'application/json',
  });
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  const token = getToken();

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  let finalBody: string | null | undefined = body;

  if (body && !isFormData) {
    finalBody = JSON.stringify(body);
  }
  const url = config.apiHost + endpoint;

  return new Promise<any>((resolve, reject) => {
    fetch(url, { body: finalBody, headers, method })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const ping = (): Promise<string> => apiCall(PING);

export const login = (formData: any): Promise<string> => apiCall(LOGIN, HttpMethods.POST, formData);
