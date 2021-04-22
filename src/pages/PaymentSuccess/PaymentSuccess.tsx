import React from 'react';
import { useNavigate } from 'react-router-dom';

import paymentsuccess from '../../assets/images/payment-success.png';

import {
  PaymentSuccessImage,
  FlexContainer,
  SuccessTitle,
  Description,
  SuccessIcon,
  ButtonStyled,
} from './PaymentSuccess.style';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <FlexContainer className="p-d-flex p-jc-center p-ai-center">
      <PaymentSuccessImage className="p-mr-6" src={paymentsuccess} />
      <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <SuccessIcon className="pi pi-check"></SuccessIcon>
        <SuccessTitle>Payment Successfully</SuccessTitle>
        <Description>Thank you, your payment have been successful.</Description>
        <div className="p-mt-3 p-d-flex p-jc-center p-ai-center">
          <ButtonStyled
            label="Go to Home"
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </div>
    </FlexContainer>
  );
};

export default PaymentSuccess;
