import Client from 'shopify-buy';
import {
  fetchProductPending,
  fetchProductSuccess,
  fetchProductFailure,
  createCheckout,
  addOrderCard,
  removeOrderCard,
} from '@/redux/features/shopifySlice/shopifySlice';

import { IProductItem } from '@/redux/features/shopifySlice/types';

const client = Client.buildClient({
  domain: 'hemsago.myshopify.com',
  storefrontAccessToken: '9afd356675e4b62218e97378363f54ac',
});

export const fetchAllProducts = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchProductPending());
    const products = await client.product.fetchAll();
    if (products.length > 0) {
      const data: IProductItem[] = products.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          descriptionHtml: item.descriptionHtml,
          description: item.description,
          productType: item.productType,
          price: item.variants[0].price,
          currencyCode: item.variants[0].priceV2.currencyCode,
          variantId: item.variants[0].id,
        };
      });
      dispatch(fetchProductSuccess({ data }));
    } else {
      dispatch(fetchProductFailure());
    }
  };
};

export const createNewCheckout = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const newCheckout = await client.checkout.create();
    const checkoutJson = JSON.parse(JSON.stringify(newCheckout));
    dispatch(createCheckout({ checkout: checkoutJson }));
  };
};

export const addCheckout = (checkoutId: string, variantId: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: 1,
      },
    ];
    const newCheckout = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
    const orderCard = JSON.parse(JSON.stringify(newCheckout.lineItems));
    dispatch(addOrderCard({ orderCard }));
  };
};

export const removeCheckout = (checkoutId: string, removeIdList: string[]): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const removeCheckout = await client.checkout.removeLineItems(checkoutId, removeIdList);
    const orderCard = JSON.parse(JSON.stringify(removeCheckout.lineItems));
    dispatch(removeOrderCard({ orderCard }));
  };
};
