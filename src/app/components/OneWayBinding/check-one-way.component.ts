import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way',
  standalone: true,
  imports: [],
  templateUrl: './check-one-way.component.html',
  styleUrl: './check-one-way.component.css',
})
export class CheckOneWayComponent {
  title: string = 'one Way Binding';
  imgsList: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
  ];
  imgSrc1: string = 'assets/imgs/5.jpg';
  inputValue: string = '';
  i: number = 0;
  showMore() {
    this.i++;
    if (this.i == this.imgsList.length) {
      this.i = 0;
    }
    this.imgSrc1 = this.imgsList[this.i];
  }
  getInputValue(e: Event) {
    const target = e.target as HTMLInputElement;
    this.inputValue = target.value;
  }
}
