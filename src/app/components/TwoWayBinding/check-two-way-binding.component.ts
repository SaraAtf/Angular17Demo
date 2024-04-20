import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-two-way-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './check-two-way-binding.component.html',
  styleUrl: './check-two-way-binding.component.css',
})
export class CheckTwoWayBindingComponent {
  inputValue: string = '';
  selectValue: string = 'Css';
  color: string = 'green';
  itiTracks: string[] = ['PD', 'SD', 'OS', 'Front'];
  flag: boolean = false;
  toggle() {
    this.flag = !this.flag;
  }
}
