import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomoUpdateComponent } from './agronomo-update.component';

describe('AgronomoUpdateComponent', () => {
  let component: AgronomoUpdateComponent;
  let fixture: ComponentFixture<AgronomoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgronomoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
