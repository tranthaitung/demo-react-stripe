import styled from 'styled-components';

import { Avatar } from 'antd';

export const UserDropdownStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  heigh: 100%;

  .user {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`;

export const AvatarStyled = styled(Avatar)`
  margin-right: 12px;
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
`;
