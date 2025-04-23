import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IpoListComponent } from '../ipolist/ipolist.component';
import { IpoFormComponent } from '../ipoform/ipoform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, IpoListComponent, IpoFormComponent],
  template: `
    <div class="home-container">
      <app-dashboard></app-dashboard>
      <app-ipo-list></app-ipo-list>
      <app-ipo-form></app-ipo-form>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
    }
  `]
})
export class HomeComponent {}
