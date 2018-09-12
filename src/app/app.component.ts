import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faFreeCodeCamp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  products = [];
  name = 'Lisa Copeland';
  githubIcon = faGithub;
  linkedinIcon = faLinkedinIn;
  fccIcon = faFreeCodeCamp;
  twitterIcon = faTwitter;

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
     this.productService.getProducts().subscribe(
       (data) => {
       console.log(data);
       this.products = data;
     });
   }

   onAbout() {
      const dialogRef = this.dialog.open(AboutDialogComponent, {
        width: '250px',
        data: { name: this.name }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }


}
