import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { ProgressSpinner } from 'primereact/progressspinner';

import routes from '@/routes/routes';

import { colors } from '@/styles/colors';

const App = () => {
  const routing = useRoutes(routes());

  return (
    <Suspense
      fallback={
        <div className="p-d-flex p-jc-center p-ai-center">
          <ProgressSpinner
            style={{ width: '32px', height: '32px' }}
            strokeWidth="4"
            fill={colors.white}
            animationDuration=".5s"
          />
        </div>
      }
    >
      {routing}
    </Suspense>
  );
};

export default App;
