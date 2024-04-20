import { Component } from '@angular/core';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-check-interactions',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './check-interactions.component.html',
  styleUrl: './check-interactions.component.css',
})
export class CheckInteractionsComponent {
  parentData: string = 'Data From Parent (Check Component)';
  secondData: string = '';
  getData(e: any) {
    this.secondData = e;
  }
}
