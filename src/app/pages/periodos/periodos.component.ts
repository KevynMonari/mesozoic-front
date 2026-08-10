import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../../services/criatura.service';
@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit{

  periodos: any [] = [];

  constructor(private criaturaService: CriaturaService) { }

  ngOnInit(): void {
    this.carregarPeriodos();
  }

  carregarPeriodos(): void {
    this.criaturaService.getPeriodos().subscribe({
      next: (dados: any[]) => {
        this.periodos = dados;
      },
    error: (erro: any) => {
        console.error('Erro ao buscar periodos: ', erro);
      }
    });
  }
}
