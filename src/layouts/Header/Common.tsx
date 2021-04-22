import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PageHeader, Space, Typography } from 'antd';
import { PageHeaderStyle, DropDownStyle } from './Header.styles';

import LOGO from '../../assets/images/new-logo.png';

const { Text } = Typography;

function HeaderCommonLayout({ subTitle, extra, className, isHomePage }) {
  return (
    <>
      {/* <DropDownStyle /> */}
      <PageHeaderStyle
        // isHomePage={isHomePage}
        className={className}
        title={
          <Space direction="vertical" size={1}>
            <Link to="/">
              <img src={LOGO} height={24} alt="logo" />
            </Link>
            <Text
              style={{
                color: 'black',
                fontSize: 11,
                fontWeight: 400,
                paddingLeft: 2,
              }}
            >
              Global B2B Search Engine
            </Text>
          </Space>
        }
        subTitle={subTitle}
        extra={extra}
      />
    </>
  );
}

HeaderCommonLayout.propTypes = {
  extra: PropTypes.any,
  subTitle: PropTypes.any,
  className: PropTypes.any,
  isHomePage: PropTypes.bool,
};

export default HeaderCommonLayout;
