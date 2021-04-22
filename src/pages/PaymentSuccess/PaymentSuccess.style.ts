import styled from 'styled-components';
import { Button } from 'primereact/button';
import colors from '@/styles/colors';

const PaymentSuccessImage = styled.img`
  width: 600px;
  height: 600px;
`;

const FlexContainer = styled.div`
  margin-top: 50px;
`;

const SuccessTitle = styled.h1`
  color: ${colors.primary};
`;

const SuccessIcon = styled.i`
  font-size: 32px;
  color: ${colors.primary};
`;

const Description = styled.h3`
  color: ${colors.textGrey};
`;

const ButtonStyled = styled(Button)`
  color: ${colors.white};
  background: ${colors.primary};
  &:hover {
    background: ${colors.secondary} !important;
  }
`;

export { PaymentSuccessImage, FlexContainer, SuccessTitle, Description, SuccessIcon, ButtonStyled };
