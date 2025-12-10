import { Component, inject, OnInit } from '@angular/core';
import { CategoryRest } from '../../rest/category/CategoryRest';
import { Category } from '../../rest/category/Category';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  private categoryRest: CategoryRest = inject(CategoryRest)
  public categories: Category[] = []

  ngOnInit() {
    this.carregarCategorias(); // já chama na inicialização
  }

  // Função pública que pode ser chamada pelo componente pai
  public carregarCategorias(): void {
    this.categoryRest.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response
      },
      error: () => {
        alert("Falha ao buscar categorias.")
      }
    })
  }

  formatNomeParaUrl(nome: string): string {
    return nome.toLowerCase().replace(/ /g, '-');
  }
}