import { Component, input } from '@angular/core';
import { BoutonPanier } from "../bouton-panier/bouton-panier";

@Component({
  selector: 'app-produit',
  imports: [BoutonPanier],
  template: `
    <div class="carte">
      <h3>{{ nom() }}</h3>
      <p>Prix : {{ prix() }} €</p>
      <p>Stock : {{ stock() }} articles</p>

      <!-- On ENVOIE le nom avec [  ]  et on ÉCOUTE avec (  ) -->
     <app-bouton-panier
      [nomProduit]="nom()"
      [stock]="stock()"            
      (ajoutAuPanier)="onAjout($event)"
/>
    </div>
  `,
  styleUrl: './produit.css',
})
export class Produit {
nom = input.required<string>();
prix = input.required<number>();
stock = input(0);

onAjout(nomProduit: string){
  console.log('ajout au panier : ', nomProduit)
}
}
