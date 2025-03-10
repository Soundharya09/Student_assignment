import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true, // Assuming standalone components; remove if using NgModule
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent { // Must be named UserComponent and exported
  user = {
    username: 'johndoe123',
    email: 'john.doe@example.com',
    status: 'Active'
  };
}