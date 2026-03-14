import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoutonPanier } from "../bouton-panier/bouton-panier";
import { AppComponent } from "../app-component/app-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoutonPanier, AppComponent],
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
