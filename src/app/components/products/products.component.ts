import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private productServices: ProductService) {}
  ngOnInit(): void {
    this.products = this.productServices.getAllProducts();
  }
  deleteProduct(id: number) {
    this.products = this.productServices.deleteProduct(id);
  }
}
