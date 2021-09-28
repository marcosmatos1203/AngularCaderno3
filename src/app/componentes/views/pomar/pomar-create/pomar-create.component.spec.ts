import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarCreateComponent } from './pomar-create.component';

describe('PomarCreateComponent', () => {
  let component: PomarCreateComponent;
  let fixture: ComponentFixture<PomarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomarCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
