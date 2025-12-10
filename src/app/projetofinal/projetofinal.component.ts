import { Component, ViewChild } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JogosComponent } from './jogos/jogos.component';
import { VortexGamesComponent } from "./vortex-games/vortex-games.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IonRefresher, IonRefresherContent, IonContent, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-projetofinal',
  standalone: true,
  imports: [
    HeaderComponent,
    VortexGamesComponent,
    CategoriasComponent,
    JogosComponent,
    FooterComponent,
    NavbarComponent,
    IonRefresher,
    IonRefresherContent,
    IonContent,
    IonHeader
],
  templateUrl: './projetofinal.component.html',
  styleUrl: './projetofinal.component.css'
})
export class ProjetofinalComponent {

  // Referências aos componentes filhos
  @ViewChild(JogosComponent) jogosComponent!: JogosComponent;
  @ViewChild(CategoriasComponent) categoriasComponent!: CategoriasComponent;
  @ViewChild(VortexGamesComponent) vortexGamesComponent!: VortexGamesComponent;

  ngAfterViewInit() {
    // Aqui os componentes filhos já estão carregados
  }

  doRefresh(event: any) {
    // Agora você pode chamar funções públicas dos componentes filhos
    this.vortexGamesComponent.carregarJogos(); 
    this.categoriasComponent.carregarCategorias(); 
    this.jogosComponent.carregarJogos(); 

    setTimeout(() => {
      event.target.complete(); // finaliza a animação
    }, 800);
  }
}
