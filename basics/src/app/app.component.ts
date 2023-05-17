import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'abdul mughees';
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  cost = 2000;
  pizza = {
    toppings: ['pepperoni', 'beef'],
    size: 'large',
  };

  getName() {
    return this.name;
  }

  changeImage(event: KeyboardEvent) {
    this.imgURL = (event.target as HTMLInputElement).value;
  }
  LogImg(event: string) {
    console.log(event);
  }
}
