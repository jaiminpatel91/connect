import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './app.profile.component.html',
  styleUrls: ['./app.newsfeed.component.css']
})
export class ProfileComponent {
   scope: any;
     newPost: any;
     profilePicUrl: string;
     fName: string;
     lName: string;
     objectDemo: any;
     like: number;

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
      this.objectDemo = {
      "content": this.newPost,
      "like": 0,
      "comment": ""
      };

      this.objectDemo.content = this.objectDemo.content.replace(/(?:\r\n|\r|\n)/g, '\n');
      this.scope.result.post.unshift(this.objectDemo);
    }
  }

  likeCounter(i){
    this.scope.result.post[i].like++;
  }

  resetPost(){
    this.newPost = "";  
  }
}
