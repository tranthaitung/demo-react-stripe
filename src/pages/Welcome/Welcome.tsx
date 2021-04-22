import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ProgressSpinner } from 'primereact/progressspinner';

import Container from '@/components/Base/Container/Container';
import SideBar from './components/SideBar';
import PricingCard from './components/PricingCard';

import {
  fetchAllProducts,
  createNewCheckout,
  addCheckout,
  removeCheckout,
} from '@/api/shopify/shopifyApi';

import { TextWrapperStyled, PricingListStyled } from './components/Pricing.styles';
import { GreetingStyled } from './Welcome.styles';
import { IProductItem } from '@/redux/features/shopifySlice/types';

const Welcome = () => {
  const userInfo: any = localStorage.getItem('userInfo');
  const userParse = JSON.parse(userInfo);
  const { shopifyStore } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const [order, setOrder] = useState<any>(null);
  const [isOpenSideBar, setOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(createNewCheckout());
  }, [dispatch]);

  const onChoosePlan = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    const orderItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      currencyCode: item.currencyCode,
    };
    setOrder(orderItem);
    setOpenSideBar(true);
    dispatch(addCheckout(shopifyStore.checkout.id, item.variantId));
  };

  const onHideSideBar = () => {
    setOpenSideBar(false);
    const removeIdList = shopifyStore.orderCard.map((item: any) => item.id);
    dispatch(removeCheckout(shopifyStore.checkout.id, removeIdList));
  };

  const onCheckout = () => {
    window.location.href = shopifyStore.checkout.webUrl;
  };

  return (
    <Container>
      {/* <GreetingStyled>{`Welcome ${userParse ? userParse.username : ''}`}</GreetingStyled> */}
      {shopifyStore.product.isLoading ? (
        <div className="p-d-flex p-jc-center p-ai-center">
          <ProgressSpinner
            style={{ width: '50px', height: '50px' }}
            strokeWidth="8"
            fill="#ffffff"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <>
          <TextWrapperStyled>
            <div className="p-text-bold">
              <h1>Find a plan that right's for you.</h1>
            </div>
            <div className="p-text-light">
              <p>Every plan comes with a 30-day free trial.</p>
            </div>
          </TextWrapperStyled>

          <PricingListStyled className="p-grid">
            {shopifyStore.product.data.map((item: IProductItem) => (
              <div key={item.id} className="p-col-12 p-md-4">
                <PricingCard
                  title={item.title}
                  descriptionHtml={item.descriptionHtml}
                  price={item.price}
                  currencyCode={item.currencyCode}
                  onChoose={(e: React.MouseEvent) => onChoosePlan(e, item)}
                  variantId={item.variantId}
                />
              </div>
            ))}
          </PricingListStyled>
          <SideBar
            visible={isOpenSideBar}
            data={order}
            onHide={onHideSideBar}
            onCheckout={onCheckout}
          />
        </>
      )}
    </Container>
  );
};

export default Welcome;
