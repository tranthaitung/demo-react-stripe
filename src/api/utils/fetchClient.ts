import { Cookies } from 'react-cookie';
import config from '@/commons/config';
import { isTokenExpired, alertAuthExpired } from '@/commons/utils/jwtHelpers';
import { IRequestErrorResponse, IRequestSuccessResponse } from '@/commons/types/types';

const apiGatewayUrl = config.apiGatewayUrl;

const cookies = new Cookies();

const objectToQueryString = obj => {
  let cleanObj = obj;
  for (var propName in cleanObj) {
    if (
      cleanObj[propName] === null ||
      cleanObj[propName] === undefined ||
      cleanObj[propName] === ''
    ) {
      delete cleanObj[propName];
    }
  }
  return Object.keys(cleanObj)
    .map(key => key + '=' + cleanObj[key])
    .join('&');
};

const generateErrorResponse = (status: number, error: string, message: string) => {
  return {
    status,
    error,
    message,
    results: [],
  };
};

const generateResponse = (status: number, message: string, results: any) => {
  return {
    status,
    message,
    results,
  };
};

export const fetchWithTimeout = async (url: string, options: any) => {
  const controller = new AbortController();
  const { timeout } = options;
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
};

export const refeshToken = async (expiredToken: string) => {
  const response = await fetch(`${apiGatewayUrl}/refeshtoken`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${expiredToken}`,
      'content-type': 'application/json',
      pragma: 'no-cache',
      'cache-control': 'no-store, no-cache',
    },
  });

  if (response.status !== 200) {
    const errors = await response.json();
    const error = errors.error;
    throw new Error(error);
  } else {
    const result = await response.json();
    cookies.set('token', result.token);
    return result.token;
  }
};

export const fetchAuth = async (url: string, params: any) => {
  const requestUrl = apiGatewayUrl + url;
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      pragma: 'no-cache',
      'cache-control': 'no-store, no-cache',
    },
    body: JSON.stringify(params),
    timeout: 300000,
  };

  try {
    const response = await fetchWithTimeout(requestUrl, options);

    // show an error if the status code is not 2xx
    if (response.status && response.status.toString().match(/^2\d{2}$/g)) {
      const result: IRequestSuccessResponse = await response.json();
      return generateResponse(result.status, result.message, result.results);
    } else {
      const errors: IRequestErrorResponse = await response.json();
      return generateErrorResponse(errors.status, errors.error, errors.message);
    }
  } catch (error) {
    const errors: IRequestErrorResponse = {
      status: 502, // 504 bad gateway
      error: 'UNKNOWN_ERROR',
      message: 'Unknown error',
    };
    return generateErrorResponse(errors.status, errors.error, errors.message);
  }
};

export const fetchClient = async (url: string, options: any) => {
  // options properties refer
  // options = {
  //   method: 'GET' || 'POST',
  //   params: '' || {},
  //   signal: null,
  // }

  // Set signal is null if no need cancelation request in hook (leak memory)

  // Check expire token and get the new one
  const token = cookies.get('token');
  if (isTokenExpired(token)) {
    alertAuthExpired();
  }

  // if params exists and method is GET, add query string to url
  // otherwise, just add params as a "body" property to the options object

  let customOptions: any = {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      pragma: 'no-cache',
      'cache-control': 'no-store, no-cache',
    },
  };

  if (options && Object.keys(options).length > 0) {
    customOptions.method = options.method ? options.method : 'GET';
    customOptions.signal = options.signal ? options.signal : null;

    if (options.params) {
      if (customOptions.method === 'GET' || customOptions.method === 'DELETE') {
        url += '?' + objectToQueryString(options.params);
      } else {
        customOptions.body = JSON.stringify(options.params); // body should match Content-Type in headers option
      }
    }

    // adding signal for cancel request - using AbortController
    if (options.signal) {
      customOptions.signal = options.signal;
    }

    // set timeout request | default is 5 minutes
    customOptions.timeout = options.timeout ? options.timeout : 300000;
  }

  try {
    const response = await fetchWithTimeout(apiGatewayUrl + url, customOptions);

    // show an error if the status code is not 2xx
    if (response.status && response.status.toString().match(/^2\d{2}$/g)) {
      if (options && options.isFile) {
        const result: any = await response.blob();
        return generateResponse(result.status, result.message, result.result);
      } else {
        const result: IRequestSuccessResponse = await response.json();
        return generateResponse(result.status, result.message, result.results);
      }
    } else {
      const errors: IRequestErrorResponse = await response.json();
      return generateErrorResponse(errors.status, errors.error, errors.message);
    }
  } catch (error) {
    const errors: IRequestErrorResponse = {
      status: 502, // 504 bad gateway
      error: 'UNKNOWN_ERROR',
      message: 'Unknown error',
    };
    return generateErrorResponse(errors.status, errors.error, errors.message);
  }
};
