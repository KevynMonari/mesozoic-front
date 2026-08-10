import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriaturaService } from '../../services/criatura.service';

@Component({
  selector: 'app-criatura-detalhe',
  templateUrl: './criatura-detalhe.component.html',
  styleUrls: ['./criatura-detalhe.component.css']
})
export class CriaturaDetalheComponent implements OnInit {

  criatura: any;

  constructor(
    private route: ActivatedRoute,
    private criaturaService: CriaturaService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.criaturaService.getCriaturaById(id).subscribe({
        next: (dados: any) => {
          this.criatura = dados;
          console.log('Detalhes da criatura:', dados);
        },
        error: (erro: any) => {
          console.error('Erro ao buscar detalhes da criatura:', erro);
        }
      });
    }
  }

}
