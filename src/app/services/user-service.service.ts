import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { ReposModule } from 'src/app/model/repos/repos.module';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL: string = "https://api.github.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
}