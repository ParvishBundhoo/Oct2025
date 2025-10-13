import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage-component/homepage-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
