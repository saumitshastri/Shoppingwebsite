import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import  'rxjs/add/operator/map'

@Injectable()
export class ProdserviceService {
  products=[];

  constructor(private httpVar:Http) { }

  getProducts() {
    this.httpVar.request('http://localhost:3000/posts/')
   .map(res => res.json())
   .subscribe((res) => {
      this.products = res;
      console.log(this.products)
   })
    
 }

}
