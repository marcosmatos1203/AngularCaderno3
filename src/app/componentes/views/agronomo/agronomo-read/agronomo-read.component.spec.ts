import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomoReadComponent } from './agronomo-read.component';

describe('AgronomoReadComponent', () => {
  let component: AgronomoReadComponent;
  let fixture: ComponentFixture<AgronomoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgronomoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
