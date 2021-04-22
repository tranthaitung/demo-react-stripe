import styled from 'styled-components';
import colors from '@/styles/colors';
import { PageHeader } from 'antd';

export const MainLayoutStyled = styled.div`
  width: 100%;
  background-color: ${colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Layout = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;

    background-size: cover;
    background-repeat: no-repeat;
`;

export const WrapperHeader = styled.div`
    width: 100%;
    //  position: absolute;
    top: 0;
    z-index: 10;
`;

export const WrapperFooter = styled.div`
    width: 100%;
    // position: absolute;
    bottom: 0;
    z-index: 10;
`;