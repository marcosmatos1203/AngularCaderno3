import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorDeleteComponent } from './produtor-delete.component';

describe('ProdutorDeleteComponent', () => {
  let component: ProdutorDeleteComponent;
  let fixture: ComponentFixture<ProdutorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
