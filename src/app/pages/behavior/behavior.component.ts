import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-behavior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior.component.html',
  styleUrl: './behavior.component.css',
  encapsulation:ViewEncapsulation.None
})
export class BehaviorComponent {

}
