import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Observable }  from 'rxjs';
import { finalize }  from 'rxjs/operators';
//servicio
import { ProductsService } from '../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/storage';
//products class
import { Products } from '../../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(public productService: ProductsService, private toastr: ToastrService, private storage: AngularFireStorage) { }

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUrl: string;

  ngOnInit() {
    this.productService.getProducts();
    //console.log(this.productService.getProducts());
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    console.log(productForm.value);
    if(productForm.value.$key == null){
      this.productService.insertProduct(productForm.value);
      this.productService.selectedProduct.url = this.imageUrl;
      this.toastr.success('Producto Agregado','El producto '+this.productService.selectedProduct.title+' ha sido agregado correctamente');
    } else {
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
  	if (productForm != null) {
  		productForm.reset();
  		this.productService.selectedProduct = new Products();
  	}
  }

  upload($event){
    //console.log($event.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = $event.target.files[0];
    const filePath = 'upload/product_'+id;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    this.uploadPercent = task.percentageChanges();
    //task.snapshotChanges().pipe( finalize(()=>this.downloadURL = ref.getDownloadURL()) ).subscribe();
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          console.log("url:"+url);
          this.imageUrl = url;
          console.log("ubicacion: "+this.imageUrl);
           // <-- do what ever you want with the url..
        });
      })
    ).subscribe();

  }

 

}

