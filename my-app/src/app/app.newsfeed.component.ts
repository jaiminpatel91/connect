import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './app.newsfeed.component.html',
  styleUrls: ['./app.newsfeed.component.css']
})
export class NewsFeedComponent {
  
     scope: any;
     newPost: any;
     profilePicUrl: string;
     fName: string;
     lName: string;

  constructor(private _MainService: MainService)
  {
    this._MainService.getData()
    .subscribe(
      (res) => {
        this.scope = res;
        console.log("scope is = ", this.scope.result);
        this.profilePicUrl = this.scope.result.profilePic;
        this.fName = this.scope.result.fname;
        this.lName = this.scope.result.lname;
      },
      (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
    );
  }

  addTodo(){
    if(this.newPost){
      this.scope.result.post.unshift(this.newPost);
    }
  }

  resetPost(){
    this.newPost = "";  
  }
}
