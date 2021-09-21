import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorSelectComponent } from './produtor-select.component';

describe('ProdutorSelectComponent', () => {
  let component: ProdutorSelectComponent;
  let fixture: ComponentFixture<ProdutorSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
