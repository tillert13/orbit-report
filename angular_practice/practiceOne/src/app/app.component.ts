import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Practice Web Page';
  name = "Travion Tiller";
  itemList = ['Computer', 'Table', 'Chair', 'Mouse'];
  rectangle = {
    length: 5,
    width: 6,
    area: function () {
      return this.length * this.width;
    }
  }
}
