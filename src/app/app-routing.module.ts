import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProcesoComponent } from './componentes/proceso/proceso.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'proceso', component:ProcesoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
