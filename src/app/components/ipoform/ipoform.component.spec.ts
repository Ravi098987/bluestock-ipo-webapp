import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPOFORMComponent } from './ipoform.component';

describe('IPOFORMComponent', () => {
  let component: IPOFORMComponent;
  let fixture: ComponentFixture<IPOFORMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPOFORMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPOFORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
