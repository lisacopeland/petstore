// Angular and Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material';

// Services
import { ProductService } from './services/product.service';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

/**
 * Main module for Petstore
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    AboutDialogComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [ProductService],
  entryComponents: [AboutDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
