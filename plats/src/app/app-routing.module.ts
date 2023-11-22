import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { RechercheParMenuComponent } from './recherche-par-menu/recherche-par-menu.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path : "plats" ,component : PlatsComponent},
  {path : "" ,component : PlatsComponent},
  {path : "add-plat" , component : AddPlatComponent},
  {path: "updatePlat/:id", component: UpdatePlatComponent},
  {path: "rechercheParMenu", component : RechercheParMenuComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
