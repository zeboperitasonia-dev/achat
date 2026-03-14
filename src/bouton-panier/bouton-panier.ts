import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-bouton-panier',
  imports: [],
  template:`
     <button 
      (click)="onClick()"
      [disabled]="stock() === 0"
    >
       Ajouter "{{ nomProduit() }}" au panier
    </button>
  `,
  styleUrl: './bouton-panier.css',
})
export class BoutonPanier {
nomProduit = input.required<string>();
 stock      = input(0); // ← nouveau Input

ajoutAuPanier = output<string>();

onClick(){
  this.ajoutAuPanier.emit(this.nomProduit());

}
}
