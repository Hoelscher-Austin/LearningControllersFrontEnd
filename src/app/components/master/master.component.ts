import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HtmlThemeComponent } from "../reusableComponents/html-theme/html-theme.component";

@Component({
  selector: 'app-master',
  imports: [RouterOutlet, RouterLink, HtmlThemeComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  
}
