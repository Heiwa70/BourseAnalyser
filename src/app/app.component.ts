import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DasboardComponent } from "./dasboard/dasboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DasboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BourseAnalyser';
}
