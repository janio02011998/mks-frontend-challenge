export interface IInitialState {
  shoppingCart: Array<IProduct> | [];
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

export interface IState {
  product: IInitialState;
}
