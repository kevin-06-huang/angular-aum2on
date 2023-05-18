import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from './housing-location';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo"
          src="/assets/logo.svg"
          aria-hidden="true"
          alt="logo">
      </header>
      <section>
        <form>
          <input type="text" placeholder="Filter by city">
          <button class="primary" type="button">Search</button>
        </form>
      </section>
      <section class="results">
        <app-housing-location [housingLocation]="housingLocation" />
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HousingLocationComponent],
})
export class AppComponent {
  title = 'homes';
}
