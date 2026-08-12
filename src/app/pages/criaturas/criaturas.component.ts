import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../../services/criatura.service';

@Component({
  selector: 'app-criaturas',
  templateUrl: './criaturas.component.html',
  styleUrls: ['./criaturas.component.css']
})
export class CriaturasComponent implements OnInit {
  criaturas: any[] = [];

  termoBusca: string = '';
  dietaFiltro: string = 'TODAS';

  constructor(private criatura: CriaturaService) { }

  ngOnInit(): void {
    this.carregarCriaturas();
  }

  carregarCriaturas(): void {
    this.criatura.getCreatures().subscribe({
      next: (dados: any[]) => {
        this.criaturas = dados;
        console.log('Criaturas carregadas com sucesso: ', dados);
      },
      error: (erro: any) => {
        console.error('Erro ao buscar criaturas da API: ', erro);
      }
    });
  }

  // Getter para filtrar em tempo real no HTML (*ngFor="let criatura of criaturasFiltradas")
  get criaturasFiltradas(): any[] {
    return this.criaturas.filter(c => {
      const nomeMatch = !this.termoBusca ||
        c.nomePopular?.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
        c.nomeCientifico?.toLowerCase().includes(this.termoBusca.toLowerCase());

      const dietaMatch = this.dietaFiltro === 'TODAS' ||
        c.dieta?.toLowerCase().includes(this.dietaFiltro.toLowerCase());

      return nomeMatch && dietaMatch;
    });
  }
}
