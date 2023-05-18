import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<p>home works!</p>`,
  styleUrls: ['home.component.css'],
  imports: [],
})
export class HomeComponent {
  housingLocation: HousingLocation = {
    id: 0,
    name: 'Acme Fresh Start Housing',
    city: 'Chicago',
    state: 'IL',
    photo:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80%27',
    availableUnits: 4,
    wifi: true,
    laundry: true,
  };
  constructor() {}
}
