import React from 'react';

import MainLayout from '@/layouts/MainLayout/MainLayout';
import NotFound from '@/pages/NotFound/NotFound';
import Welcome from '@/pages/Welcome/Welcome';
import PaymentSuccess from '@/pages/PaymentSuccess/PaymentSuccess';

const routes = () => {
  return [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Welcome /> },
        { path: '/payment-success', element: <PaymentSuccess /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ];
};

export default routes;
