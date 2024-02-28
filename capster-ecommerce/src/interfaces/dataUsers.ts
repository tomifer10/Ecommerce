import { dataProducts } from "./dataProducts";

export interface dataUsers {
  id: string;
  name: string;
  password: string;
  email: string;
  cart: dataProducts[];
  wishlist: any[];
}
