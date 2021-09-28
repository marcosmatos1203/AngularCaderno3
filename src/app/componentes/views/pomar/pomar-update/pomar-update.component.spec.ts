import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarUpdateComponent } from './pomar-update.component';

describe('PomarUpdateComponent', () => {
  let component: PomarUpdateComponent;
  let fixture: ComponentFixture<PomarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomarUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
