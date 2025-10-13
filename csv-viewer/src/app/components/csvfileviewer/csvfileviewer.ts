import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-csvfileviewer',
  imports: [MatToolbarModule],
  templateUrl: './csvfileviewer.html',
  styleUrl: './csvfileviewer.css'
})
export class Csvfileviewer {
  title: string = 'CSV File Viewer title';

}
