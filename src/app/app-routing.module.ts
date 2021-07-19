import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgronomoCreateComponent } from './componentes/views/agronomo/agronomo-create/agronomo-create.component';
import { AgronomoReadComponent } from './componentes/views/agronomo/agronomo-read/agronomo-read.component';
import { HomeComponent } from './componentes/views/home/home.component';
import { ProdutorCreateComponent } from './componentes/views/produtor/produtor-create/produtor-create.component';
import { ProdutorReadComponent } from './componentes/views/produtor/produtor-read/produtor-read.component';

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
    path: 'agronomo',
    component: AgronomoReadComponent
  },
  {
    path: 'agronomo/create',
    component: AgronomoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
