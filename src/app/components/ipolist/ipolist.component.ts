import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IpoService } from '../../services/ipo.service';
import { Ipo } from '../../models/ipo.model';

@Component({
  selector: 'app-ipo-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="ipo-list-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4>Upcoming IPO | Dashboard</h4>
        <button routerLink="/app/ipo-form" class="btn btn-primary">Register IPO</button>
      </div>
      
      <div class="card">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Price Band</th>
                  <th>Open</th>
                  <th>Close</th>
                  <th>ISSUE SIZE</th>
                  <th>Issue Type</th>
                  <th>Listing Date</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Delete/View</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ipo of ipos">
                  <td>{{ ipo.company }}</td>
                  <td>{{ ipo.priceBand }}</td>
                  <td>{{ ipo.open }}</td>
                  <td>{{ ipo.close }}</td>
                  <td>{{ ipo.issueSize }}</td>
                  <td>{{ ipo.issueType }}</td>
                  <td>{{ ipo.listingDate }}</td>
                  <td>
                    <span class="status-badge" [ngClass]="{
                    'ongoing': ipo.status === 'Ongoing',
                    'coming': ipo.status === 'Coming',
                    'new-listed': ipo.status === 'New Listed'
                  }">{{ ipo.status }}</span>
                  </td>
                  <td>
                    <button class="btn btn-update" [routerLink]="['/app/ipo-form', ipo.id]">Update</button>
                  </td>
                  <td>
                    <div class="actions">
                      <button class="btn-icon delete" (click)="deleteIpo(ipo.id)">
                        <i class="bi bi-trash"></i>
                      </button>
                      <button class="btn-icon view" (click)="viewIpo(ipo.id)">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="pagination">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ipo-list-container {
      padding: 10px;
    }
    
    .card {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border: none;
      background-color: white;
      overflow: hidden;
    }
    
    .table {
      margin-bottom: 0;
    }
    
    .table th {
      border-top: none;
      font-size: 14px;
      color: #6c757d;
      font-weight: 500;
      padding: 15px;
    }
    
    .table td {
      vertical-align: middle;
      padding: 15px;
      font-size: 14px;
    }
    
    .status-badge {
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      display: inline-block;
    }
    
    .status-badge.ongoing {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .status-badge.coming {
      background-color: #fff8e1;
      color: #f57f17;
    }
    
    .status-badge.new-listed {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .btn-primary {
      background-color: #6f42c1;
      border-color: #6f42c1;
    }
    
    .btn-update {
      background-color: #6f42c1;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 6px 14px;
      font-size: 14px;
    }
    
    .actions {
      display: flex;
      gap: 10px;
    }
    
    .btn-icon {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
    }
    
    .btn-icon.delete {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .btn-icon.view {
      background-color: #e3f2fd;
      color: #1565c0;
    }
    
    .pagination {
      padding: 15px;
      display: flex;
      justify-content: center;
    }
    
    .page-item.active .page-link {
      background-color: #6f42c1;
      border-color: #6f42c1;
    }
    
    .page-link {
      color: #6f42c1;
    }
  `]
})
export class IpoListComponent implements OnInit {
  ipos: Ipo[] = [];

  constructor(private ipoService: IpoService) {}

  ngOnInit() {
    this.loadIpos();
  }

  loadIpos() {
    this.ipoService.getIpos().subscribe((data: Ipo[]) => {
      this.ipos = data;
    });
  }

  deleteIpo(id: number) {
    if (confirm('Are you sure you want to delete this IPO?')) {
      this.ipoService.deleteIpo(id).subscribe(() => {
        this.loadIpos();
      });
    }
  }

  viewIpo(id: number) {
    // TODO: Implement view functionality or modal
    console.log('View IPO with ID:', id);
  }
}