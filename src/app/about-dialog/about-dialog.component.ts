import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface DialogData {
  name: string;
}

/**
 * Component which contains the about dialog
 *
 * @export
 * @class AboutDialogComponent
 */
@Component({
  selector: 'app-dialog-about',
  templateUrl: 'about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent {

  cancelIcon = faTimes;

  constructor(
    public dialogRef: MatDialogRef<AboutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
