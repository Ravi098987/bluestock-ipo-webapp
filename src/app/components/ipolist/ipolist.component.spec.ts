import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPOlistComponent } from './ipolist.component';

describe('IPOlistComponent', () => {
  let component: IPOlistComponent;
  let fixture: ComponentFixture<IPOlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPOlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPOlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
