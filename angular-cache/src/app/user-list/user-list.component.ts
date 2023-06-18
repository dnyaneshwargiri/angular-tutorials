import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    setInterval(() => {
      this.getUsers();
      setInterval;
    }, 3000);
  }
  getUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.results;
    });
  }
}
