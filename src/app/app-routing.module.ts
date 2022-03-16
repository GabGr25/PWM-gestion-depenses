import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListePersonnesComponent } from './liste-personnes.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DetailsPersonneComponent } from './details-personne.component';

const routes: Routes = [
  {path: 'personnes/:id', component: DetailsPersonneComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'personnes', component: ListePersonnesComponent},
  {path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
