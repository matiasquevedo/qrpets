import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Products } from '../models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	productList: AngularFireList<any>;
  product: AngularFireObject<any>;

	selectedProduct: Products = new Products();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts(){
    this.productList = this.firebase.list('cars');
    //console.log(this.productList);
    return this.productList;
  }



  /*getProductDetails(id){
    return this.firebase.list('cars', ref=> ref.equalTo(id)).valueChanges();
  }*/

  getProductDetails(id:string){
    console.log(id);
    return this.firebase.object('cars/'+id);
  }

  insertProduct(product: Products){
  	this.productList.push({
  		title: product.title,
      description: product.description,
      url:product.url,
  		modelo: product.modelo,
  		km: product.km,
      tipo: product.tipo,
      motor:product.motor,
      potencia: product.potencia,
      transmision: product.transmision,
      combustible:product.combustible,
      puertas: product.puertas,
      price: product.price
  	});
  }

  updateProduct(product: Products){
  	this.productList.update(product.$key,{
      title: product.title,
      description: product.description,
      url:product.url,
      modelo: product.modelo,
      km: product.km,
      tipo: product.tipo,
      motor:product.motor,
      potencia: product.potencia,
      transmision: product.transmision,
      combustible:product.combustible,
      puertas: product.puertas,
      price: product.price
  	});
  }

  deleteProduct($key: string){
  	this.productList.remove($key);
  }

  onProduct($key: string){
    this.productList.remove($key);
  }



}
