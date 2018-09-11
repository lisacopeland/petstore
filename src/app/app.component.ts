import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  products = [];
  faCoffee = faCoffee;

  constructor(private productService: ProductService) { }

  ngOnInit() {
     this.productService.getProducts().subscribe(
       (data) => {
       console.log(data);
       this.products = data;
     });
   }

}
