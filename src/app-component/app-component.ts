import { Component } from '@angular/core';
import { Produit } from '../produit/produit';

@Component({
  selector: 'app-app-component',
  imports: [Produit],
  template:`
    <div class="boutique">
      <h1> Ma Boutique</h1>

      @for (produit of produits; track produit.nom) {
        <app-produit
          [nom]="produit.nom"
          [prix]="produit.prix"
          [stock]="produit.stock"
        />
      }
    </div>
  `,
  styleUrl: './app-component.css',
})
export class AppComponent {
 produits=[
  {nom: 'chaussure Nike', prix: 89.99,stock: 5},
  {nom: 'T-shirt Adidas', prix :29.99,stock: 35},
  {nom: 'casquette puma ', prix :29.99,stock: 0},

]
}