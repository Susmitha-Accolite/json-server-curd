import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() public userData: any;

  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(value:any) {
    this.userService.addUser(value).subscribe();
    this.router.navigate(['/']);
  }
}
