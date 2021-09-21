import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarReadComponent } from './pomar-read.component';

describe('PomarReadComponent', () => {
  let component: PomarReadComponent;
  let fixture: ComponentFixture<PomarReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomarReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomarReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
