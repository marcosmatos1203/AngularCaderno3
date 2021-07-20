import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomoDeleteComponent } from './agronomo-delete.component';

describe('AgronomoDeleteComponent', () => {
  let component: AgronomoDeleteComponent;
  let fixture: ComponentFixture<AgronomoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgronomoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
