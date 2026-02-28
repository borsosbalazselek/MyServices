import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-autoweb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autoweb.component.html',
  styleUrls: ['./autoweb.component.css'],
  encapsulation: ViewEncapsulation.None  
})
export class AutowebComponent {

onSubmit(e: Event) {
  e.preventDefault();
  alert('Köszönjük! Hamarosan jelentkezünk.');
}


}
