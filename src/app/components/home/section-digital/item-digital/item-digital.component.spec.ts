import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDigitalComponent } from './item-digital.component';

describe('ItemDigitalComponent', () => {
  let component: ItemDigitalComponent;
  let fixture: ComponentFixture<ItemDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
