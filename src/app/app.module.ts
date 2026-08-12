import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CriaturasComponent } from './pages/criaturas/criaturas.component';
import { CriaturaDetalheComponent } from './pages/criatura-detalhe/criatura-detalhe.component';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { FosseisRegioesComponent } from './pages/fosseis-regioes/fosseis-regioes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CriaturasComponent,
    CriaturaDetalheComponent,
    PeriodosComponent,
    FosseisRegioesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
