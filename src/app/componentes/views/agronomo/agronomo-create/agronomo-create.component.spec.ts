import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomoCreateComponent } from './agronomo-create.component';

describe('AgronomoCreateComponent', () => {
  let component: AgronomoCreateComponent;
  let fixture: ComponentFixture<AgronomoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgronomoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
