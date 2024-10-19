import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { ProductComponent } from './components/pages/product/product.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { CollectionsComponent } from './components/pages/collections/collections.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    DashboardComponent,
    AboutusComponent,
    CollectionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
