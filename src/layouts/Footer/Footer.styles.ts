import styled from 'styled-components';
import colors from '@/styles/colors';
import { Space } from 'antd';

export const Footer = styled.footer`
  min-height: 48px;
  padding: 0px 12px;
  background-color: #333;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  color: #fff;

  a,
  .ant-typography {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LocationStyle = styled(Space)`
  flex-shrink: 0;
  padding: 8px 0px;
  margin-right: 12px;
`;

export const LinkWrapper = styled(Space)`
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;

    .ant-space-item {
      flex: 0 0 calc(33% - 24px);
    }
  }
`;