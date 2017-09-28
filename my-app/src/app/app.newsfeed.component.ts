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

  constructor(private _MainService: MainService)
  {
    this._MainService.getData()
    .subscribe(
      (res) => {
        this.scope = res;
        console.log("scope is = ", this.scope.result);
      },
      (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
    );
  }

  addTodo(){
    if(this.newPost){
      this.scope.result.post.push(this.newPost);
    }
  }

  resetPost(){
    this.newPost = "";  
  }
}
