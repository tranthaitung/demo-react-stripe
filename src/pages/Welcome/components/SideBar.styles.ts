import styled from 'styled-components';

import { Button } from 'primereact/button';

import colors from '@/styles/colors';

export const SideBarStyled = styled.div`
  color: ${colors.textGrey};
  text-align: center;
`;

export const InfoStyled = styled.div`
  color: ${colors.textGrey};
  text-align: left;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const CurrencyStyled = styled.span`
  color: ${colors.textGrey};
  margin-left: 20px;
`;

export const ButtonStyled = styled(Button)`
  background: ${colors.primary};
  width: 100%;
  color: ${colors.white};
  &:hover {
    background: ${colors.secondary} !important;
  }
`;

export const FooterSideBarStyled = styled.div`
  margin-top: 150px;
`;

export const TotalAmountStyled = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const SideBarHeading = styled.h2``;
