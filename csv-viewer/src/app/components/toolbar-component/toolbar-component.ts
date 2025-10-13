import { Component } from '@angular/core';
import { Csvfileviewer } from '../csvfileviewer/csvfileviewer';
import { Csvmodify } from '../csvmodify/csvmodify';
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-toolbar-component',
  imports: [Csvfileviewer, Csvmodify, MatToolbarModule],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css'
})
export class ToolbarComponent {

}
