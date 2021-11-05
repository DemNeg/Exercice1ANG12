import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaisonComponent} from "./components/Maisons/maison/maison.component";
import {NewMaisonComponent} from "./components/Maisons/new-maison/new-maison.component";
import {EditMaisonComponent} from "./components/Maisons/edit-maison/edit-maison.component";

const routes: Routes = [
  {path:"maisons",component:MaisonComponent},
  {path:"newMaison",component:NewMaisonComponent},
  {path:"editMaison/:id",component:EditMaisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
