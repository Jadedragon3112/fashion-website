import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './components/products-list/products-list.component';
import { HomePageComponent } from './home_page/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'list-products', component: ProductList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
