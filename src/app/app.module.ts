import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home_page/home-page/home-page.component';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { TaskbarComponent } from './components/taskbar/taskbar/taskbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailProductsComponent,
    TaskbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
