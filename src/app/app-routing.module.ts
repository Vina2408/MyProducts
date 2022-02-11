import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
   component:LoginComponent
  },
  {
  path:'Login',
  component:LoginComponent
  },
  {
path:'Dashboard',
component : ProductListComponent
  }, 
  {
    path:'AddProduct',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
