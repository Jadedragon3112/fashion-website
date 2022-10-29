import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon/detail-pokemon.component';
import { ProductList } from './components/products-list/products-list.component';
import { HomePageComponent } from './home_page/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'list-products', component: ProductList
  },
  {
    path: 'detail', component: DetailPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
