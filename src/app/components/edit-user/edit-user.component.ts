import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  constructor(public userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(userData: User) {
    this.userService.editUser(userData).subscribe();
    this.router.navigate(['/']);
  }

}
