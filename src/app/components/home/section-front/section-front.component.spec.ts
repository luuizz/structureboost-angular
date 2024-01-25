import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFrontComponent } from './section-front.component';

describe('SectionFrontComponent', () => {
  let component: SectionFrontComponent;
  let fixture: ComponentFixture<SectionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
