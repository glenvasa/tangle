import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // run to get all products upon loading
    this.getProducts();
  }

  getProducts() {
    // subscribe to an observable to get back results
    this.api.getJSON().subscribe((resp) => {
      this.items = resp;
    });
  }
}
