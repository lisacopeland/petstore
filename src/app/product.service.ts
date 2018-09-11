import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

class ResponseArray {
  result: any[];
}

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
        this.products = data['result'];
        return this.products;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return Observable.throw(error);
      })
    );
  }
}
