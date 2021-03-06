import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './componentes/templates/cabecalho/cabecalho.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './componentes/templates/footer/footer.component';
import { NavComponent } from './componentes/templates/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './componentes/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ProdutorReadComponent } from './componentes/views/produtor/produtor-read/produtor-read.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProdutorCreateComponent } from './componentes/views/produtor/produtor-create/produtor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgronomoReadComponent } from './componentes/views/agronomo/agronomo-read/agronomo-read.component';
import { AgronomoCreateComponent } from './componentes/views/agronomo/agronomo-create/agronomo-create.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProdutorDeleteComponent } from './componentes/views/produtor/produtor-delete/produtor-delete.component';
import { AgronomoDeleteComponent } from './componentes/views/agronomo/agronomo-delete/agronomo-delete.component';
import { AgronomoUpdateComponent } from './componentes/views/agronomo/agronomo-update/agronomo-update.component';
import { ProdutorUpdateComponent } from './componentes/views/produtor/produtor-update/produtor-update.component';
import { PomarReadComponent } from './componentes/views/pomar/pomar-read/pomar-read.component';
import { ProdutorSelectComponent } from './componentes/views/produtor/produtor-select/produtor-select.component';
import { PomarCreateComponent } from './componentes/views/pomar/pomar-create/pomar-create.component';
import { MatSelectModule } from '@angular/material/select';
import { PomarUpdateComponent } from './componentes/views/pomar/pomar-update/pomar-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutorReadComponent,
    ProdutorCreateComponent,
    AgronomoReadComponent,
    AgronomoCreateComponent,
    ProdutorDeleteComponent,
    AgronomoDeleteComponent,
    AgronomoUpdateComponent,
    ProdutorUpdateComponent,
    PomarReadComponent,
    ProdutorSelectComponent,
    PomarCreateComponent,
    PomarUpdateComponent,
    
  ],
  imports: [
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
