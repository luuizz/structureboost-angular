import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDigitalComponent } from './section-digital.component';

describe('SectionDigitalComponent', () => {
  let component: SectionDigitalComponent;
  let fixture: ComponentFixture<SectionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
