import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

/**
 * Component which contains the header for the PetStore App
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = 'Lisa Copeland';
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAbout() {
    const dialogRef = this.dialog.open(AboutDialogComponent, {
      width: '400px',
      height: '400px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
