import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonPanier } from './bouton-panier';

describe('BoutonPanier', () => {
  let component: BoutonPanier;
  let fixture: ComponentFixture<BoutonPanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonPanier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonPanier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
