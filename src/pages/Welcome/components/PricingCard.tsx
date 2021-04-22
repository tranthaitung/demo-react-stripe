import React from 'react';
import { Divider } from 'primereact/divider';
import * as Styled from './Pricing.styles';
import { currencyConverter } from '../utils/currencyConverter';

interface PricingCardProps {
  title: string;
  descriptionHtml: string;
  price: string;
  currencyCode: string;
  variantId: string;
  onChoose: (e: React.MouseEvent) => void;
}

const PricingCard: React.FC<PricingCardProps> = props => {
  const { title, descriptionHtml, price, currencyCode, onChoose } = props;
  const mostPopular = title.startsWith('Gold') ? true : false;

  const renderCardFeatures = () => {
    let descriptionList = descriptionHtml.toString().split('\n');
    for (let i = 0; i < descriptionList.length; i++) {
      const tmp = document.createElement('DIV');
      tmp.innerHTML = descriptionList[i];
      descriptionList[i] = tmp.textContent || tmp.innerText;
    }

    const list = descriptionList.filter(item => item);

    return (
      <Styled.ListStyled>
        {list.map((item, index) => {
          return (
            <Styled.ListItemStyled key={index}>
              <Styled.IconStyled>
                <i className="pi pi-check-circle p-mr-2"></i>
              </Styled.IconStyled>
              {item}
            </Styled.ListItemStyled>
          );
        })}
      </Styled.ListStyled>
    );
  };

  return (
    <Styled.CardStyled>
      {mostPopular && <Styled.CircelTagStyled>Most Popular</Styled.CircelTagStyled>}
      <Styled.CardTitleStyled>
        <h2>{title}</h2>
      </Styled.CardTitleStyled>
      <Divider />
      <Styled.CardBillingStyled>
        <Styled.PriceStyled>
          {currencyCode} {currencyConverter(price)}
        </Styled.PriceStyled>
        <Styled.PricePieceStyled>{'/ month'}</Styled.PricePieceStyled>
      </Styled.CardBillingStyled>
      <Divider />
      {renderCardFeatures()}
      <Divider />
      <Styled.ButtonStyled onClick={onChoose} label="Get Started Now" />
    </Styled.CardStyled>
  );
};

export default PricingCard;
