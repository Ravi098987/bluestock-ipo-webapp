// components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IpoService } from '../../services/ipo.service';
import * as AngularHighcharts from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="dashboard-container">
      <div class="page-header">
        <h3>Dashboard</h3>
      </div>
      
      <div class="row">
        <!-- Left column -->
        <div class="col-md-7">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">IPO Dashboard India</h5>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-arrow-up-short text-success me-1"></i>
                <span class="text-success">{{ stats?.ipoInGain }} IPO in Gain</span>
              </div>
              
              <div class="chart-container">
                <div class="bubbles-chart">
                  <div class="bubble orange">
                    <div class="number">{{ stats?.totalIpo }}</div>
                    <div class="label">Total IPO</div>
                  </div>
                  <div class="bubble blue">
                    <div class="number">{{ stats?.ipoInGain }}</div>
                    <div class="label">IPO in Gain</div>
                  </div>
                  <div class="bubble purple">
                    <div class="number">{{ stats?.ipoInLoss }}</div>
                    <div class="label">IPO in Loss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right column -->
        <div class="col-md-5">
          <div class="card mb-4">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">Quick Links</h5>
              </div>
              
              <div class="quick-links">
                <div class="quick-link-item">
                  <div class="quick-link-icon nse">NSE</div>
                  <div class="quick-link-text">NSE India</div>
                  <a href="https://www.nseindia.com" target="_blank" class="quick-link-action">Visit Now</a>
                </div>
                
                <div class="quick-link-item">
                  <div class="quick-link-icon bse">BSE</div>
                  <div class="quick-link-text">BSE India</div>
                  <a href="https://www.bseindia.com" target="_blank" class="quick-link-action">Visit Now</a>
                </div>
                
                <div class="quick-link-item">
                  <div class="quick-link-icon sebi">SEBI</div>
                  <div class="quick-link-text">SEBI</div>
                  <a href="https://www.sebi.gov.in" target="_blank" class="quick-link-action">Visit Now</a>
                </div>
                
                <div class="quick-link-item">
                  <div class="quick-link-icon money">₹</div>
                  <div class="quick-link-text">Money Control</div>
                  <a href="https://www.moneycontrol.com" target="_blank" class="quick-link-action">Visit Now</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">Main Board IPO</h5>
                <a routerLink="/app/ipo-list" class="view-report">View Report</a>
              </div>
              
              <div class="d-flex align-items-center">
                <div class="donut-chart-container">
                  <div class="donut-chart">
                    <!-- Placeholder for actual chart -->
                  </div>
                </div>
                
                <div class="chart-legend ms-3">
                  <div class="legend-item">
                    <span class="dot upcoming"></span>
                    <span class="legend-text">Upcoming</span>
                    <span class="legend-value">{{ stats?.upcomingIpo }}</span>
                  </div>
                  <div class="legend-item">
                    <span class="dot listed"></span>
                    <span class="legend-text">New Listed</span>
                    <span class="legend-value">{{ stats?.newListed }}</span>
                  </div>
                  <div class="legend-item">
                    <span class="dot ongoing"></span>
                    <span class="legend-text">Ongoing</span>
                    <span class="legend-value">{{ stats?.ongoing }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 10px;
    }
    
    .page-header {
      margin-bottom: 20px;
    }
    
    .card {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border: none;
      background-color: white;
    }
    
    .card-title {
      font-weight: 600;
      color: #333;
    }
    
    .view-report {
      color: #6f42c1;
      font-size: 14px;
      text-decoration: none;
    }
    
    .chart-container {
      height: 220px;
      position: relative;
    }
    
    .bubbles-chart {
      display: flex;
      justify-content: center;
      position: relative;
    }
    
    .bubble {
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      margin: 10px;
      padding: 20px;
    }
    
    .bubble.orange {
      background-color: #ff9800;
      width: 120px;
      height: 120px;
      z-index: 3;
    }
    
    .bubble.blue {
      background-color: #29b6f6;
      width: 100px;
      height: 100px;
      z-index: 2;
    }
    
    .bubble.purple {
      background-color: #7e57c2;
      width: 80px;
      height: 80px;
      z-index: 1;
    }
    
    .number {
      font-size: 1.8rem;
    }
    
    .label {
      font-size: 0.8rem;
      text-align: center;
    }
    
    .quick-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .quick-link-item {
      display: flex;
      align-items: center;
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 12px 15px;
    }
    
    .quick-link-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-right: 15px;
      color: white;
    }
    
    .quick-link-icon.nse {
      background-color: #ff5722;
    }
    
    .quick-link-icon.bse {
      background-color: #2196f3;
    }
    
    .quick-link-icon.sebi {
      background-color: #4caf50;
    }
    
    .quick-link-icon.money {
      background-color: #009688;
    }
    
    .quick-link-text {
      flex: 1;
      font-weight: 500;
    }
    
    .quick-link-action {
      color: #6f42c1;
      font-size: 14px;
      text-decoration: none;
    }
    
    .donut-chart-container {
      width: 120px;
      height: 120px;
      position: relative;
    }
    
    .donut-chart {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: conic-gradient(
        #7e57c2 0% 40%,
        #29b6f6 40% 90%,
        #ff9800 90% 100%
      );
      position: relative;
    }
    
    .donut-chart::before {
      content: "";
      width: 70px;
      height: 70px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .chart-legend {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 8px;
    }
    
    .dot.upcoming {
      background-color: #7e57c2;
    }
    
    .dot.listed {
      background-color: #29b6f6;
    }
    
    .dot.ongoing {
      background-color: #ff9800;
    }
    
    .legend-text {
      flex: 1;
    }
    
    .legend-value {
      font-weight: 600;
      margin-left: 5px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  stats: any;

  constructor(private ipoService: IpoService) {}

  ngOnInit() {
    this.ipoService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
  }
}