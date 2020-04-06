import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1,
        name: 'admin',
        last_name: 'admin',
        login: 'admin',
        password: 'admin',
        email: 'admin@kbtu.kz',
        image: '',
        saved_recipes: [],
        user_recipes: [] }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1
  }
}
