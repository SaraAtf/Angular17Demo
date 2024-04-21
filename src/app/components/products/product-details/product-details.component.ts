import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product?: Iproduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productservices: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product = this.productservices.getProductById(this.productId);
  }

  back() {
    this.router.navigate(['/products']);
  }
}
