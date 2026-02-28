import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-iot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css'],
  encapsulation: ViewEncapsulation.None  
})
export class IotComponent {
year = new Date().getFullYear();

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Köszönjük! Küldj e-mailt az info@autorobottech.hu címre.');
  }
}
