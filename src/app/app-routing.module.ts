import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CriaturasComponent } from './pages/criaturas/criaturas.component';
import { CriaturaDetalheComponent } from './pages/criatura-detalhe/criatura-detalhe.component';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { FosseisRegioesComponent } from './pages/fosseis-regioes/fosseis-regioes.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'criaturas', component: CriaturasComponent },
  { path: 'criaturas/:id', component: CriaturaDetalheComponent },
  { path: 'periodos', component: PeriodosComponent },
  { path: 'fosseis-regioes', component: FosseisRegioesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
