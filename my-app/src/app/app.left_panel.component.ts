import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './app.left_panel.component.html',
  styleUrls: ['./app.left_panel.component.css']
})
export class LeftPanelComponent {
    @Input('parentData') data: any;
}
