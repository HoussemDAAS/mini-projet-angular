import { Injectable } from '@angular/core';

import { Plat } from './model/plat.model';
@Injectable({
providedIn: 'root'
})
export class platService {
plats : Plat[]; //un tableau de plat
plat! : Plat;
constructor() {
  this.plats = [
    {idplat : 1, nomplat : "Pizza", prixplat : 3000.600, dateCreation : new Date("01/14/2011")},
    {idplat : 2, nomplat : "Burger", prixplat : 450, dateCreation : new Date("12/17/2010")},
    {idplat : 3, nomplat :"Sandwich", prixplat : 900.123, dateCreation : new Date("02/20/2020")}
     ];
}
listePlats():Plat[] {
  return this.plats;
}
ajouterPlat( prod: Plat){
this.plats.push(prod);
}
supprimerPlat(p  : Plat ){
  const index = this.plats.indexOf(p, 0);
if (index > -1) {
this.plats.splice(index, 1);
}
}
consulterPlat(id:number): Plat{
  this.plat = this.plats.find(p => p.idplat == id)!;
  return this.plat;
  }
  updatePlat(p:Plat)
  {
  // console.log(p);
  this.supprimerPlat(p);
  this.ajouterPlat(p);
  }
}