import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';

const routes: Routes = [
  {path : "plats" ,component : PlatsComponent},
  {path : "add-plat" , component : AddPlatComponent},
  {path: "updatePlat/:id", component: UpdatePlatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
