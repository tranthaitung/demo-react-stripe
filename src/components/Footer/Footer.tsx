import React from 'react';
import Container from '../Base/Container/Container';
import { FooterWrapStyled } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapStyled>
      <Container fluid>
        <div>Copyright © {new Date().getFullYear()}</div>
      </Container>
    </FooterWrapStyled>
  );
};

export default Footer;
