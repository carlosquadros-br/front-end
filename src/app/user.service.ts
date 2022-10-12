import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl!: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:4200/users';
  }

  /**
   * Encontrar todos os usuarios
   */
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

 /**
  * Salvar usuario
  */
  public save(user : User) {
      return this.http.post<User>(this.usersUrl, user);
  }

}
