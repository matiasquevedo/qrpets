import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Products } from '../../../models/products';
import { element } from '@angular/core/src/render3';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Products[];

  constructor(public productService: ProductsService,private toastr: ToastrService,private _DomSanitizationService: DomSanitizer, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe( item => {
        this.productList = [];
        item.forEach(element =>{
         let x = element.payload.toJSON()
         x["$key"] = element.key;
         console.log(x);
         this.productList.push(x as Products);
         this.spinner.hide();
        });
    });

  }

  imgUrl($url){
    return this._DomSanitizationService.bypassSecurityTrustResourceUrl($url);
  }

  onEdit(product: Products){
    this.productService.selectedProduct = Object.assign({},product);
  }

  onDelete($key: string){
    this.productService.deleteProduct($key);
    this.toastr.success('Producto Eliminado','El Producto ha sido eliminado');
  }

  dropList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.productList, event.previousIndex, event.currentIndex);
  }

  deleteDrop(event: CdkDragDrop<string[]>){
    this.onDelete(event.item.data);
  }

}
