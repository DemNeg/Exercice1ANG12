import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMaisonComponent } from './new-maison.component';

describe('NewMaisonComponent', () => {
  let component: NewMaisonComponent;
  let fixture: ComponentFixture<NewMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
