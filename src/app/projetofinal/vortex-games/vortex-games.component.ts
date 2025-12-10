import { Component } from '@angular/core';

@Component({
  selector: 'app-vortex-games',
  imports: [],
  templateUrl: './vortex-games.component.html',
  styleUrl: './vortex-games.component.css'
})
export class VortexGamesComponent {
  scrollToElement(elementId: string): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 50);
  }

  public carregarJogos(): void {
    // Aqui você pode colocar a lógica que busca os dados via API
    console.log('VortexGamesComponent: recarregando dados...');
    // Ex: this.jogos = await this.jogosService.buscarJogos();
  }
}
