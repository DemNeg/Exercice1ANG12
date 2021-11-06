import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ItemMaisonComponent } from "./item-maison.component";

describe('ItemMaisonComponent', () => {
  let component: ItemMaisonComponent;
  let fixture: ComponentFixture<ItemMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
