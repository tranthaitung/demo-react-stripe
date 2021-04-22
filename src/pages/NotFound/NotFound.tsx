import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';

import Container from '@/components/Base/Container/Container';

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <Container fluid>
      <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <h1>404 - Error</h1>
        <p>Page not found</p>
        <Button className="p-mt-4" label="Go to home" icon="pi pi-arrow-left" onClick={goBack} />
      </div>
    </Container>
  );
};

export default NotFound;
