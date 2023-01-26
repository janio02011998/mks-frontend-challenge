export interface IInitialState {
  shoppingCart: Array<IShoppingCart> | [];
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IShoppingCart extends IProduct {
  count: number;
}

export interface IState {
  product: IInitialState;
}
