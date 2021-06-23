import { Component, OnInit } from '@angular/core';
import { ReposModule } from 'src/app/model/repos/repos.module';
import {UserServiceService} from 'src/app/services/user-service.service'
@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  userName: string = "tektutorialshub"
  test: ReposModule[] =[];
 
  loading: boolean = false;
  errorMessage : string ="";
  ngOnInit(): void {
  }

 
  constructor(private githubService: UserServiceService) {
  }
 
  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.test = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}
