import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Bill';

  userData={
    email: 'test@email.com',
    role: 'Admin'
  }

  title = 'angular-tutorial';
}
