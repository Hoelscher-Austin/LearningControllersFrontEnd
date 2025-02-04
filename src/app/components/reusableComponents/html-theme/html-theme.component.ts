import { Component } from '@angular/core';

@Component({
  selector: 'app-html-theme',
  imports: [],
  templateUrl: './html-theme.component.html',
  styleUrl: './html-theme.component.css'
})
export class HtmlThemeComponent {

  theme: string = 'Light';



  setTheme(){
    if(this.theme === 'Light'){
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.theme = 'Dark';
    }
    else{
      document.documentElement.setAttribute('data-bs-theme','dark');
      this.theme = 'Light';
    }
  }
}
