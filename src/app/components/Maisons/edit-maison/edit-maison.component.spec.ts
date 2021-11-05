import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaisonComponent } from './edit-maison.component';

describe('EditMaisonComponent', () => {
  let component: EditMaisonComponent;
  let fixture: ComponentFixture<EditMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
