import { Component } from '@angular/core';
import {ListeUsersComponent} from './liste-users/liste-users.component'
import {UserServiceService} from './services/user-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApi';
}

