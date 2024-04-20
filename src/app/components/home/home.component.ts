import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { ListSectionComponent } from './list-section/list-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ListSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
