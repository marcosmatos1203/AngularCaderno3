import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgronomoCreateComponent } from './componentes/views/agronomo/agronomo-create/agronomo-create.component';
import { AgronomoDeleteComponent } from './componentes/views/agronomo/agronomo-delete/agronomo-delete.component';
import { AgronomoReadComponent } from './componentes/views/agronomo/agronomo-read/agronomo-read.component';
import { AgronomoUpdateComponent } from './componentes/views/agronomo/agronomo-update/agronomo-update.component';
import { HomeComponent } from './componentes/views/home/home.component';
import { ProdutorCreateComponent } from './componentes/views/produtor/produtor-create/produtor-create.component';
import { ProdutorDeleteComponent } from './componentes/views/produtor/produtor-delete/produtor-delete.component';
import { ProdutorReadComponent } from './componentes/views/produtor/produtor-read/produtor-read.component';
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
    path: 'produtor/delete/:id',
    component: ProdutorDeleteComponent
  },
  {
    path: 'produtor/update/:id',
    component: ProdutorUpdateComponent
  },
  {
    path: 'agronomo',
    component: AgronomoReadComponent
  },
  {
    path: 'agronomo/create',
    component: AgronomoCreateComponent
  },
  {
    path: 'agronomo/delete/:id',
    component: AgronomoDeleteComponent
  }
  ,
  {
    path: 'agronomo/update/:id',
    component: AgronomoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
