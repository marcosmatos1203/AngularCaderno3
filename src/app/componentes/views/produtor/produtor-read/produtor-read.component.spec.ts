import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorReadComponent } from './produtor-read.component';

describe('ProdutorReadComponent', () => {
  let component: ProdutorReadComponent;
  let fixture: ComponentFixture<ProdutorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
