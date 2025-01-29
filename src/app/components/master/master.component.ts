import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
