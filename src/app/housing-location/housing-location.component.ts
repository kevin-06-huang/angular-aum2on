import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  template: `<section class="listing">
              <img class="listing-photo">
              <h2 class="listing-heading"></h2>
              <p class="listing-location"></p>
            </section>`,
  styleUrls: ['./housing-location.component.css'],
  imports: [CommonModule],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
