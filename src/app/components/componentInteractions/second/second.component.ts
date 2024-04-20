import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  secondData: string = 'this Data Will be Sent';
  @Output() myEvent = new EventEmitter<string>();
  sendData() {
    this.myEvent.emit(this.secondData);
  }
}
