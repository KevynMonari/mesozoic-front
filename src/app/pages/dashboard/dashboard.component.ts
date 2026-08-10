import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../../services/criatura.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalCriaturas: number = 0;
  totalCarnivoros: number = 0;
  totalHerbivoros: number = 0;
  ultimasCriaturas: any[] = [];

  constructor(private criaturaService: CriaturaService) { }

ngOnInit(): void {
    this.carregarMetricas();
  }

  carregarMetricas(): void {
    this.criaturaService.getCreatures().subscribe({
      next: (dados: any[]) => {
        this.totalCriaturas = dados.length;

        this.totalCarnivoros = dados.filter(c =>
          c.dieta?.toLowerCase().includes('carn')
        ).length;

        this.totalHerbivoros = dados.filter(c =>
          c.dieta?.toLowerCase().includes('herb')
        ).length;

        this.ultimasCriaturas = dados.slice(-5).reverse();
      },
      error: (erro: any) => {
        console.error('Erro ao carregar dados do dashboard:', erro);
      }
    });
  }

}
