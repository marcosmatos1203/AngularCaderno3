import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgronomoCreateComponent } from './componentes/views/agronomo/agronomo-create/agronomo-create.component';
import { AgronomoDeleteComponent } from './componentes/views/agronomo/agronomo-delete/agronomo-delete.component';
import { AgronomoReadComponent } from './componentes/views/agronomo/agronomo-read/agronomo-read.component';
import { AgronomoUpdateComponent } from './componentes/views/agronomo/agronomo-update/agronomo-update.component';
import { HomeComponent } from './componentes/views/home/home.component';
import { PomarCreateComponent } from './componentes/views/pomar/pomar-create/pomar-create.component';
import { PomarReadComponent } from './componentes/views/pomar/pomar-read/pomar-read.component';
import { ProdutorCreateComponent } from './componentes/views/produtor/produtor-create/produtor-create.component';
import { ProdutorDeleteComponent } from './componentes/views/produtor/produtor-delete/produtor-delete.component';
import { ProdutorReadComponent } from './componentes/views/produtor/produtor-read/produtor-read.component';
import { ProdutorSelectComponent } from './componentes/views/produtor/produtor-select/produtor-select.component';
import { ProdutorUpdateComponent } from './componentes/views/produtor/produtor-update/produtor-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtor',
    component: ProdutorReadComponent
  },
  {
    path: 'produtor/create',
    component: ProdutorCreateComponent
  },
  {
    path: 'pomarProdutor',
    component: ProdutorSelectComponent
  },
  {
    path: 'pomarProdutor/:id',
    component: PomarReadComponent
  },
  {
    path: 'produtor/delete/:id',
    component: ProdutorDeleteComponent
  },
  {
    path: 'produtor/update/:id',
    component: ProdutorUpdateComponent
  },
  {
    path: 'responsavelTecnico',
    component: AgronomoReadComponent
  },
  {
    path: 'responsavelTecnico/create',
    component: AgronomoCreateComponent
  },
  {
    path: 'responsavelTecnico/delete/:id',
    component: AgronomoDeleteComponent
  },
  {
    path: 'responsavelTecnico/update/:id',
    component: AgronomoUpdateComponent
  },
  {
    path: 'pomar',
    component: PomarReadComponent
  },
  {
    path: 'pomar/create/:id',
    component: PomarCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
