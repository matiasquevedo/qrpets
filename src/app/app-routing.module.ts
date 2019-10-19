import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent} from './inicio/inicio.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProfileComponent} from './profile/profile.component';

const routes: Routes = [
	{path:'', component: InicioComponent},
	{path:'nuevo', component: ProductComponent},
	{path:'perfil', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
