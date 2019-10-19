import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatOption, MatOptionModule, MatSelectModule, MatInputModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

//servicios
import { HeroService } from './hero.service';
import { ProductsService } from './services/products.service';

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { CartishaComponent } from './components/cartisha/cartisha.component';



@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    InicioComponent,
    CartishaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ToastrModule.forRoot(),
    DragDropModule,
    NgxSpinnerModule
  ],
  providers: [
    HeroService,
    ProductsService,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
