import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      overview works!
    </p>
  `,
  styles: [
  ]
})
export default class OverviewComponent {

}
