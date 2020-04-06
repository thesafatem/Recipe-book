import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: User[];

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  logIn() {
    this.categoryService.triggerOnMyButton();
  }

  add(login: string, password: string, email: string): void {
    if (!login || !password || !email) {
      return;
    }
    this.userService.addUser({
      login: login,
      password: password,
      email: email,
      name: '',
      last_name: '',
      image: '',
      saved_recipes: [],
      user_recipes: []
    } as User)
      .subscribe(user => {
        this.users.push(user)
      })
      this.logIn()
  }

}
