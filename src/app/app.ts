import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoutonLite } from "../bouton-lite/bouton-lite";
import { CommonModule } from '@angular/common';
import { Accueil } from "../accueil/accueil";
import { BoutonPanier } from "../bouton-panier/bouton-panier";
import { AppComponent } from "../app-component/app-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoutonLite, CommonModule, Accueil, BoutonPanier, AppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet-approfondir');
  merciVisible = true;
  afficherMerci(){
    this.merciVisible =false;
  }
}
