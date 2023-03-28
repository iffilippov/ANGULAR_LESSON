import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductResponse } from '../interface/product-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _http: HttpClient ) { }

  getList():Observable<IProductResponse>{
    return this._http.get<IProductResponse>(
      'https://fakerapi.it/api/v1/custom?_quantity=16&customfield1=pokemon&customfield2=dateTime&customfield3=phone&customfield4=city&customfield5=streetAddress&customfield6=image&customfield7=number'
    )
  }

}
