import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

class ResponseArray {
  result: any[];
}

/**
 * Service which retrieves the records from Sanity.io
 *
 * @export
 * @class ProductService
 */
@Injectable()
export class ProductService {
  products: object[];

  constructor(private http: HttpClient) {}

  getProducts() {
    const query = encodeURIComponent(
      '*[_type == \'product\'] | order(name) { name, _id, description, price, \'imageUrl\': image.asset->url }'
    );

    const URI = `https://q7245wim.apicdn.sanity.io/v1/data/query/pets?query=${query}`;

    return this.http.get<ResponseArray>(URI).pipe(
      map(data => {
        console.log(JSON.stringify(data));
        this.products = this.translateProducts(data['result']);
        // this.products = data['result'];
        return this.products;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return observableThrowError(error);
      })
    );
  }

  translateProducts(responseArray: any[]) {
    return responseArray.map(x => Product.productTranslate(x));
  }
}
