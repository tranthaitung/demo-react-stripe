import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, IProductPayload } from './types';
// import { IRequestErrorResponse } from '@/commons/types/types';

const initialState: IState = {
  product: {
    data: [],
    isLoading: false,
  },
  checkout: {},
  orderCard: [],
};

const shopifySlice = createSlice({
  name: '@shopify',
  initialState,
  reducers: {
    fetchProductPending: (state: IState) => {
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: true,
          data: [],
        },
      };
    },
    fetchProductSuccess: (state: IState, action: PayloadAction<IProductPayload>) => {
      return {
        ...state,
        product: {
          isLoading: false,
          data: action.payload.data,
        },
      };
    },
    fetchProductFailure: (state: IState) => {
      return {
        ...state,
        auth: {
          isLoading: false,
          data: [],
        },
      };
    },
    createCheckout: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        checkout: action.payload.checkout,
      };
    },
    addOrderCard: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        orderCard: action.payload.orderCard,
      };
    },
    removeOrderCard: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        orderCard: action.payload.orderCard,
      };
    },
  },
});

export const {
  fetchProductPending,
  fetchProductSuccess,
  fetchProductFailure,
  createCheckout,
  addOrderCard,
  removeOrderCard,
} = shopifySlice.actions;

export default shopifySlice;
