export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  selectedAmount?: number;
}

export interface IUser {
  name: string;
  total: number;
}
