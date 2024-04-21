import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { productsList } from '../Models/productList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  produsts: Iproduct[] = [];
  constructor() {
    this.produsts = productsList;
  }

  getAllProducts(): Iproduct[] {
    return this.produsts;
  }

  getProductById(id: number): Iproduct | undefined {
    return this.produsts.find((product) => product.id == id);
  }

  addNewProduct(product: Iproduct): Iproduct[] {
    this.produsts.push(product);
    return this.produsts;
  }

  deleteProduct(id: number): Iproduct[] {
    this.produsts = this.produsts.filter((product) => product.id != id);
    return this.produsts;
  }

  editProduct(id: number, product: Iproduct): Iproduct {
    let filteredList = this.produsts.filter((product) => product.id != id);
    filteredList.push(product);
    this.produsts = filteredList;
    return product;
  }
}
