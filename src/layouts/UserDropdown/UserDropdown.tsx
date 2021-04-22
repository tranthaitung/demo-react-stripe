import React from 'react';
import { Menu, Dropdown, Avatar, Space, Modal, Drawer } from 'antd';
import {
  UserOutlined,
  IdcardOutlined,
  KeyOutlined,
  LogoutOutlined,
  ProfileOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import PropTypes from 'prop-types';
import { UserDropdownStyle , AvatarStyled} from './UserDropdown.styles';

function UserDropdown() {
  return (
    <UserDropdownStyle className="user-dropdown">
      <Space size="middle">
        <Dropdown placement="bottomRight" trigger={['click']} overlay={<></>}>
          <Space size="middle" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
            <div className="user__name">Admin</div>
            <AvatarStyled icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Space>
    </UserDropdownStyle>
  );
}

export default UserDropdown;

UserDropdown.propTypes = {
  isHomePage: PropTypes.bool,
};
