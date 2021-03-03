import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users:User[] = [];
  constructor(private userService:UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=> {
      this.users = users;
    });
  }

  onEdit(user:User) {
    this.userService.userData = Object.assign({}, user);
    this.router.navigate(['/edit-user']);
  }

  onDelete(user:User) {
    this.users = this.users.filter(usr => usr.id !== user.id);
    this.userService.deleteUser(user).subscribe();
  }

  onAdd(){
    this.router.navigate(['/add-user']);
  }
}
