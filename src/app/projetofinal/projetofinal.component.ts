import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VortexGamesComponent } from './vortex-games/vortex-games.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { JogosComponent } from './jogos/jogos.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-projetofinal',
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    NavbarComponent,
    VortexGamesComponent,
    CategoriasComponent,
    JogosComponent,
    FooterComponent
  ],
  templateUrl: './projetofinal.component.html',
  styleUrls: ['./projetofinal.component.css']
})
export class ProjetofinalComponent implements AfterViewInit {

  @ViewChild(JogosComponent) jogosComponent!: JogosComponent;
  @ViewChild(CategoriasComponent) categoriasComponent!: CategoriasComponent;
  @ViewChild(VortexGamesComponent) vortexGamesComponent!: VortexGamesComponent;

  ngAfterViewInit() {
    // Componentes filhos já carregados
  }

  doRefresh(event: any) {
    // Chama funções públicas de cada componente filho
    this.vortexGamesComponent.carregarJogos(); 
    this.categoriasComponent.carregarCategorias(); 
    this.jogosComponent.carregarJogos(); 

    setTimeout(() => {
      event.target.complete(); // Finaliza animação do refresher
    }, 800);
  }
}