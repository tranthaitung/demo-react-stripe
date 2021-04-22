import styled from 'styled-components';

import { Button } from 'primereact/button';

import colors from '@/styles/colors';

export const TextWrapperStyled = styled.div`
  color: ${colors.textGrey};
  text-align: center;
`;

export const PricingListStyled = styled.div`
  margin: 32px 0;
`;

export const CardStyled = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 1px 1px 10px 1px #ddd;
  padding: 20px 0;
  position: relative;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5%);s
    transition: all 0.3s ease;
  }
`;

export const CardTitleStyled = styled.div`
  color: ${colors.textGrey};
  padding: 20px 25px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 1em;
`;

export const CardBillingStyled = styled.div`
  color: ${colors.textGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceStyled = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const PricePieceStyled = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 4px;
  position: relative;
  top: 5px;
`;

export const ListStyled = styled.ul`
  list-style-type: none;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListItemStyled = styled.li`
  text-align: left;
`;
export const CircelTagStyled = styled.div`
  font-size: 12px;
  font-weight: 700;
  background-color: #33b5e5;
  color: ${colors.white};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconStyled = styled.i`
  color: ${colors.primary};
  margin-right: 0.5em;
`;

export const ButtonStyled = styled(Button)`
  color: ${colors.white};
  background: ${colors.primary};
  &:hover {
    background: ${colors.secondary} !important;
  }
`;
