// components/ipo-form/ipo-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpoService } from '../../services/ipo.service';
import { Ipo } from '../../models/ipo.model';

@Component({
  selector: 'app-ipo-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="ipo-form-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4>{{ isEditMode ? 'Update' : 'Upcoming' }} IPO Information</h4>
        <div>
          <button (click)="registerIpo()" class="btn btn-primary me-2">Register</button>
          <button routerLink="/app/ipo-list" class="btn btn-outline-secondary">Cancel</button>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <div class="ipo-form-tabs">
            <div class="tab" [class.active]="activeTab === 'information'" (click)="activeTab = 'information'">
              <i class="bi bi-info-circle"></i>
              IPO Information
            </div>
            <div class="tab" [class.active]="activeTab === 'info'" (click)="activeTab = 'info'">
              <i class="bi bi-file-text"></i>
              IPO Info
            </div>
          </div>
          
          <div class="tab-content">
            <div *ngIf="activeTab === 'information'" class="ipo-form">
              <h5 class="section-title">IPO Information</h5>
              <p class="section-subtitle">Enter IPO Details</p>
              
              <form [formGroup]="ipoForm" class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Company Logo</label>
                  <div class="company-logo-container">
                    <div class="logo-preview" *ngIf="logoPreview">
                      <img [src]="logoPreview" alt="Company Logo">
                    </div>
                    <div class="logo-placeholder" *ngIf="!logoPreview">
                      <div class="placeholder-text">NSE India</div>
                      <div class="placeholder-subtext">NSE Logo</div>
                      <div class="placeholder-size">180px</div>
                    </div>
                    <div class="logo-actions">
                      <button type="button" class="btn btn-sm btn-primary upload-btn">Upload Logo</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!logoPreview">Delete</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="companyName" class="form-label">Company Name</label>
                  <input type="text" class="form-control" id="companyName" formControlName="company" placeholder="Enter company name">
                </div>
                
                <div class="col-md-6">
                  <label for="priceBand" class="form-label">Price Band</label>
                  <input type="text" class="form-control" id="priceBand" formControlName="priceBand" placeholder="Enter price band">
                </div>
                
                <div class="col-md-6">
                  <label for="open" class="form-label">Open</label>
                  <input type="date" class="form-control" id="open" formControlName="open">
                </div>
                
                <div class="col-md-6">
                  <label for="close" class="form-label">Close</label>
                  <input type="date" class="form-control" id="close" formControlName="close">
                </div>
                
                <div class="col-md-6">
                  <label for="issueSize" class="form-label">Issue Size</label>
                  <input type="text" class="form-control" id="issueSize" formControlName="issueSize" placeholder="Enter issue size">
                </div>
                
                <div class="col-md-6">
                  <label for="issueType" class="form-label">Issue Type</label>
                  <select class="form-select" id="issueType" formControlName="issueType">
                    <option value="">Select issue type</option>
                    <option value="Book Built">Book Built</option>
                    <option value="Fixed Price">Fixed Price</option>
                    <option value="Rights Issue">Rights Issue</option>
                  </select>
                </div>
                
                <div class="col-md-6">
                  <label for="listingDate" class="form-label">LISTING DATE</label>
                  <input type="date" class="form-control" id="listingDate" formControlName="listingDate">
                </div>
                
                <div class="col-md-6">
                  <label for="status" class="form-label">Status</label>
                  <select class="form-select" id="status" formControlName="status">
                    <option value="">Select status</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Coming">Coming</option>
                    <option value="New Listed">New Listed</option>
                  </select>
                </div>
              </form>
              
              <h5 class="section-title mt-4">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h5>
              
              <form [formGroup]="listedDetailsForm" class="row g-3">
                <div class="col-md-6">
                  <label for="ipoPrice" class="form-label">IPO PRICE</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" id="ipoPrice" formControlName="ipoPrice" placeholder="383">
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="listingPrice" class="form-label">LISTING PRICE</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" id="listingPrice" formControlName="listingPrice" placeholder="435">
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="listingGain" class="form-label">LISTING GAIN</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="listingGain" formControlName="listingGain" placeholder="13.58 %">
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="listingDate2" class="form-label">LISTING DATE</label>
                  <input type="date" class="form-control" id="listingDate2" formControlName="listingDate2">
                </div>
                
                <div class="col-md-6">
                  <label for="cmp" class="form-label">CMP</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" id="cmp" formControlName="cmp" placeholder="410">
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="currentReturn" class="form-label">CURRENT RETURN</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="currentReturn" formControlName="currentReturn" placeholder="7.05 %">
                  </div>
                </div>
                
                <div class="col-md-6">
                  <label for="rhpLink" class="form-label">RHP</label>
                  <input type="text" class="form-control" id="rhpLink" formControlName="rhpLink" placeholder="Enter RHP PDF Link">
                </div>
                
                <div class="col-md-6">
                  <label for="drhpLink" class="form-label">DRHP</label>
                  <input type="text" class="form-control" id="drhpLink" formControlName="drhpLink" placeholder="Enter DRHP PDF Link">
                </div>
              </form>
            </div>
            
            <div *ngIf="activeTab === 'info'" class="ipo-info">
              <h5>IPO Additional Information</h5>
              <p>This section is for additional IPO details and information</p>
              <!-- Additional IPO info form fields can be added here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ipo-form-container {
      padding: 10px;
    }
    
    .card {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border: none;
      background-color: white;
    }
    
    .ipo-form-tabs {
      display: flex;
      border-bottom: 1px solid #e9ecef;
      margin-bottom: 20px;
    }
    
    .tab {
      padding: 12px 20px;
      cursor: pointer;
      color: #6c757d;
      font-weight: 500;
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;
    }
    
    .tab i {
      margin-right: 8px;
    }
    
    .tab.active {
      color: #6f42c1;
      border-bottom: 2px solid #6f42c1;
    }
    
    .section-title {
      color: #343a40;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .section-subtitle {
      color: #6c757d;
      font-size: 14px;
      margin-bottom: 20px;
    }
    
    .company-logo-container {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 10px;
    }
    
    .logo-preview, .logo-placeholder {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f8f9fa;
      border: 1px dashed #ced4da;
    }
    
    .logo-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder-text {
      color: #6f42c1;
      font-weight: 500;
      font-size: 14px;
    }
    
    .placeholder-subtext {
      color: #6c757d;
      font-size: 12px;
    }
    
    .placeholder-size {
      color: #adb5bd;
      font-size: 10px;
    }
    
    .logo-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .btn-primary {
      background-color: #6f42c1;
      border-color: #6f42c1;
    }
    
    .btn-outline-secondary {
      color: #6c757d;
    }
  `]
})
export class IpoFormComponent implements OnInit {
  ipoForm!: FormGroup;
  listedDetailsForm!: FormGroup;
  activeTab: string = 'information';
  isEditMode: boolean = false;
  logoPreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ipoService: IpoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ipoForm = this.fb.group({
      company: ['', Validators.required],
      priceBand: ['', Validators.required],
      open: ['', Validators.required],
      close: ['', Validators.required],
      issueSize: ['', Validators.required],
      issueType: ['', Validators.required],
      listingDate: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.listedDetailsForm = this.fb.group({
      ipoPrice: [''],
      listingPrice: [''],
      listingGain: [''],
      listingDate2: [''],
      cmp: [''],
      currentReturn: [''],
      rhpLink: [''],
      drhpLink: ['']
    });

    // Check if edit mode and load IPO data if needed
    const ipoId = this.route.snapshot.paramMap.get('id');
    if (ipoId) {
      this.isEditMode = true;
      // Load IPO data by id and patch form (not implemented here)
    }
  }

  registerIpo() {
    if (this.ipoForm.valid) {
      const ipoData = {
        ...this.ipoForm.value,
        ...this.listedDetailsForm.value
      };
      // Save IPO data using service (not implemented here)
      console.log('IPO Registered:', ipoData);
      this.router.navigate(['/app/ipo-list']);
    } else {
      alert('Please fill all required fields.');
    }
  }
}