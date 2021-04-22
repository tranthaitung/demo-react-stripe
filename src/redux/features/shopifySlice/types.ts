export interface IProductItem {
  id: string;
  title: string;
  descriptionHtml: string;
  description: string;
  productType: string;
  price: string;
  currencyCode: string;
  variantId: string;
}

export interface IProductPayload {
  data: IProductItem[];
}

export interface IProductState extends IProductPayload {
  isLoading: boolean;
}

export interface IState {
  product: IProductState;
  checkout: any;
  orderCard: any;
}
