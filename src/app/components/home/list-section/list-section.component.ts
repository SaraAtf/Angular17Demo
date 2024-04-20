import { Component } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-list-section',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list-section.component.html',
  styleUrl: './list-section.component.css',
})
export class ListSectionComponent {}
