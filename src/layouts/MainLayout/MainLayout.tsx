import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { PageHeader, Space, Typography } from 'antd';
import { Menubar } from 'primereact/menubar';

import { MainLayoutStyled, WrapperHeader, WrapperFooter, Layout } from './MainLayout.styles';
import HeaderHome from '../Header/Home';
import Footer from '../Footer/Footer';

import './styles.scss';

const { Text } = Typography;

const MainLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'Pricing',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/'),
    },
  ];

  return (
    <Layout>
      {/* <Menubar className="p-jc-end" model={menuItems} /> */}

      <WrapperHeader>
        <HeaderHome />
      </WrapperHeader>

      <Outlet />

      {/* <WrapperFooter>
        <Footer isHomePage />
      </WrapperFooter> */}
    </Layout>
  );
};

export default MainLayout;
