import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWA demo application with Angular 8 and Workbox';

  constructor() {
  }

  showWelcomeDialog() {
    alert('Welcome to PWA demo app');
  }
}
