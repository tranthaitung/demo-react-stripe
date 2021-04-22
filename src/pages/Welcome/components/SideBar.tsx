import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';
import * as Styled from './SideBar.styles';

import { currencyConverter } from '../utils/currencyConverter';

interface ISideBar {
  data: any;
  visible: boolean;
  onHide: () => void;
  onCheckout: () => void;
}
const SideBarRight: React.FC<ISideBar> = ({ data, visible, onHide, onCheckout }: ISideBar) => {
  return (
    <Styled.SideBarStyled>
      <Sidebar visible={visible} position="right" baseZIndex={1000000} onHide={onHide}>
        <Styled.SideBarHeading>Your Order</Styled.SideBarHeading>
        <Divider />
        {data && data.price && (
          <>
            <Styled.InfoStyled>
              {data.title}
              <Styled.CurrencyStyled>x1</Styled.CurrencyStyled>
            </Styled.InfoStyled>
            <Styled.FooterSideBarStyled>
              <Divider />
              <Styled.TotalAmountStyled>{`Total: ${currencyConverter(data.price)} ${
                data.currencyCode
              }`}</Styled.TotalAmountStyled>
              <Divider />
              <Styled.ButtonStyled onClick={onCheckout} label="Checkout" />
            </Styled.FooterSideBarStyled>
          </>
        )}
      </Sidebar>
    </Styled.SideBarStyled>
  );
};

export default SideBarRight;
