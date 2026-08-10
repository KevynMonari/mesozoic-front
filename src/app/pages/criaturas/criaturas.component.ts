import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../../services/criatura.service';

@Component({
  selector: 'app-criaturas',
  templateUrl: './criaturas.component.html',
  styleUrls: ['./criaturas.component.css']
})
export class CriaturasComponent implements OnInit {
  criaturas: any[] = [];

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
}
