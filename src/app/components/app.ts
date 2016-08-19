import { Component } from '@angular/core';
import { AuthService } from 'src/auth';


@Component({
  selector: 'app',
  styles: [
    require('./app.scss')
  ],
  template: require('./app.html')
})

export class AppComponent {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}
