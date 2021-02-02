import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // products passed from parent Home Component
  @Input() products: any[];

  constructor(private shopping_cart: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart(p) {
    this.shopping_cart.addProduct(p);
  }
}
