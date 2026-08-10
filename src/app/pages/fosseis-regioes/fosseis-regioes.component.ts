import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../../services/criatura.service';

@Component({
  selector: 'app-fosseis-regioes',
  templateUrl: './fosseis-regioes.component.html',
  styleUrls: ['./fosseis-regioes.component.css']
})
export class FosseisRegioesComponent implements OnInit {

  fosseis: any[] = [];
  regioes: any[] = [];

  constructor(private criaturaService: CriaturaService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.criaturaService.getFosseis().subscribe({
      next: (dados) => this.fosseis = dados,
      error: (erro) => console.error('Erro ao buscar fósseis: ', erro)
    });

    this.criaturaService.getRegioes().subscribe({
      next: (dados) => this.regioes = dados,
      error: (erro) => console.error('Erro ao buscar regiões: ', erro)
    });
  }
}
