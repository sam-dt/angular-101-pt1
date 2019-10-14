import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodiComponent } from './codi.component';

describe('CodiComponent', () => {
  let component: CodiComponent;
  let fixture: ComponentFixture<CodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
