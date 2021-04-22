import { PageHeader, Space, Typography } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderCommonLayout from './Common';

export const PageHeaderStyle = styled(PageHeader)`
  z-index: 10;
  width: 100%;
  margin: 0px;
  padding: 6px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  .ant-page-header-heading {
    align-items: 'center';
    display: flex;
  }

  .ant-page-header-heading-left {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 4px 0;
    overflow: hidden;
  }

  .ant-page-header-heading-title {
    line-height: 20px;
    flex-shrink: 0;
    margin-right: 12px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ant-page-header-heading-sub-title {
    flex-shrink: 1;
    /* flex-basis: 60%; */
    margin-left: 20px;

    .ant-btn-text:hover {
      color: var(--green);
    }

    @media screen and (max-width: 768px) {
      margin-left: 0px;

      .navbar-search {
        position: absolute;
        top: 100%;
        left: 0px;
        width: 100%;
        padding: 0px 12px;
      }
    }

    @media screen and (max-width: 400px) {
      margin-left: 0px;
    }
  }
  .ant-page-header-heading-extra {
    display: flex;
    margin: 4px 0;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
      .user__name {
        display: none;
      }
    }
  }
`;

export const DropDownStyle = createGlobalStyle`
  .ant-dropdown-menu {
    .ant-dropdown-menu-submenu-title {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const HeaderCommonLayoutStyles = styled(HeaderCommonLayout)`
  .ant-page-header-heading-title,
  .user__name,
  .menu__icon {
    color: black;
  }

  .ant-page-header-heading-sub-title {
    .ant-btn-text {
      color: black;
    }

    .ant-btn-text:hover {
      color: var(--green);
    }
  }
`;

export const ExtraStyle = styled.div`
  display: flex;
  align-items: center;

  .btn-golden {
    background-color: transparent;
    color: white;
    margin-right: 16px;
    border: none;
    font-weight: 500;
  }

  .btn-golden__icon {
    font-size: 18px;
  }
`;
