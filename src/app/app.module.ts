import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChildNavBarComponent } from './components/Maisons/maison/child-nav-bar/child-nav-bar.component';
import { MaisonComponent } from './components/Maisons/maison/maison.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NewMaisonComponent } from './components/Maisons/new-maison/new-maison.component';
import { EditMaisonComponent } from './components/Maisons/edit-maison/edit-maison.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChildNavBarComponent,
    MaisonComponent,
    NewMaisonComponent,
    EditMaisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
