import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  products: object[];

  constructor(private http: HttpClient) { }

  getProducts() {

    const query = encodeURIComponent(
      '*[_type == \'product\']{ name, _id, description, price, \'imageUrl\': image.asset->url }'
    );

    const URI = `https://q7245wim.apicdn.sanity.io/v1/data/query/pets?query=${query}`;

    return this.http
      .get(URI)
      .map(data => {
        console.log(data);
        this.products = data['result'];
        return this.products;
      })
      .catch((error: HttpErrorResponse) => {
        console.log(error);
        return Observable.throw(error);
    });
  }

}
