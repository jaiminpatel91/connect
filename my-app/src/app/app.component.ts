import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   data: any;
  constructor(private _MainService: MainService)
  {
    this._MainService.getData()
    .subscribe(
      (res) => {
        this.data = res;
        console.log("data is = ", this.data.result);
      },
      (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
    );
  }
  }
