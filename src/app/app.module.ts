import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ProductService],
  entryComponents: [AboutDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
