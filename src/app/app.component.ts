import { Component } from '@angular/core'

import { MatDialog } from '@angular/material/dialog';
import { EventPopupComponent } from './components/popups/event-popup/event-popup.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transmit-security';

  constructor(
    public dialog: MatDialog
  ) { }

  addEvent(): void {
    const dialogRef = this.dialog.open(EventPopupComponent, {
      width: '450px',
      data: {}
    });
  }
}