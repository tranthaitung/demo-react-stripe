import jsonwebtoken from 'jsonwebtoken';
import { Cookies } from 'react-cookie';
import config from '@/commons/config';

const cookies = new Cookies();
const homeUrl = config.homeUrl;

export const isTokenExpired = (token: string) => {
  const jwt: any = jsonwebtoken.decode(token);
  if (jwt) {
    const { exp } = jwt;
    const now = new Date().getTime();
    if (exp < now / 1000) {
      return true;
    }
    return false;
  }
};

export const isLoggedIn = () => {
  let token = cookies.get('token');
  const userInfo: any = localStorage.getItem('userInfo');
  const userParse = JSON.parse(userInfo);
  let isLoggedIn = false;
  if (userParse && userParse.username && !isTokenExpired(token)) {
    isLoggedIn = true;
  } else {
    localStorage.removeItem('userInfo');
    cookies.remove('token');
  }
  return isLoggedIn;
};

export const alertAuthExpired = () => {
  alert('Phiên hoạt động đã hết hạn, vui lòng đăng nhập lại.');
  cookies.remove('token');
  localStorage.removeItem('userInfo');
  window.location.replace(`${homeUrl}/login`);
};

export const removeAuth = () => {
  cookies.remove('token');
  localStorage.removeItem('userInfo');
};

export const jwtDecode = () => {
  let token = cookies.get('token');

  if (isTokenExpired(token)) {
    alertAuthExpired();
  }

  const jwt: any = jsonwebtoken.decode(token);

  if (jwt) {
    const sub = jwt.sub; // string
    const iat = jwt.iat; // number
    const exp = jwt.exp; // number

    return {
      sub,
      iat,
      exp,
    };
  }
  return null;
};
