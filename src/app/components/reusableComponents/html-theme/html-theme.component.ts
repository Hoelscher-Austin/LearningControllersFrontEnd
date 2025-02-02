import { Component } from '@angular/core';

@Component({
  selector: 'app-html-theme',
  imports: [],
  templateUrl: './html-theme.component.html',
  styleUrl: './html-theme.component.css'
})
export class HtmlThemeComponent {

  theme: string = 'Dark';



  setTheme(){
    if(this.theme === 'Dark'){
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.theme = 'Light';
    }
    else{
      document.documentElement.setAttribute('data-bs-theme','dark');
      this.theme = 'Dark';
    }
  }
}
