import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productsList } from '../../../Models/productList';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  productName: string = '';
  price: number = 0;
  quantity: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = +this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.productService.getProductById(this.productId);
      this.productName = this.product?.name;
      this.price = this.product?.price;
      this.quantity = this.product?.quantity;
      console.log(this.product);
    }
  }

  productHandler() {
    let id = productsList.length + 1;
    let newProduct: Iproduct = {
      id,
      name: this.productName,
      price: this.price,
      quantity: this.quantity,
    };
    if (this.productId == 0) {
      let response = this.productService.addNewProduct(newProduct);
      console.log(response);
      this.router.navigate(['/products']);
    } else {
      let response = this.productService.editProduct(
        this.productId,
        newProduct
      );
      console.log(response);
      this.router.navigate(['/products']);
    }
    console.log();
  }
}
