import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-friends',
  templateUrl: './app.friends.component.html'
})
export class FriendsComponent {
  
     scope: any;
     profilePicUrl: string;
     name: string;

  constructor(private _MainService: MainService)
  {
    this._MainService.getData()
    .subscribe(
      (res) => {
        this.scope = res;
        this.scope = this.scope.result.friends;
         console.log("scope is = ", this.scope);
    
      },
      (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
    );
  }

}
