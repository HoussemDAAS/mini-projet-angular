import { Injectable } from '@angular/core';
import { Plat } from './model/plat.model';
import { Menu } from './model/menu.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { menuWrapper } from './model/menuWrapped.model';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class platService {
  apiURL: string = 'http://localhost:8080/plats/api';
  apiURLmenu: string = 'http://localhost:8080/plats/menu';
  plats: Plat[]=[];
  plat!: Plat;
  menus: Menu[]=[];

  constructor( private http : HttpClient) {
  //   this.menus = [
  //     { idMenu: 1, nomMenu: "Les Pattes" },
  //     { idMenu: 2, nomMenu: "Les Sandwich" }
  //   ];

  //   this.plats = [
  //     { idPlat: 1, nomPlat: "Pizza", prix: 3000.600, dateCreation: new Date("01/14/2011"), menu: { idMenu: 1, nomMenu: "Les Pattes" } },
  //     { idPlat: 2, nomPlat: "Burger",prix: 450, dateCreation: new Date("12/17/2010"), menu: { idMenu: 2, nomMenu: "Les Sandwich" } },
  //     { idPlat: 3, nomPlat: "Sandwich", prix:5000, dateCreation: new Date("02/20/2020"), menu: { idMenu: 2, nomMenu: "Les Sandwich" } }
  //   ];
  }

  listePlats():Observable<Plat[]> {
    return this.http.get<Plat[]>(this.apiURL);
  }

  ajouterPlat(plts: Plat):Observable<Plat> {
    return this.http.post<Plat>(this.apiURL,plts,httpOptions);
  }

  supprimerPlat(id :number) {
    const  url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterPlat(id: number):Observable< Plat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Plat>(url);
  }

  trierPlats() {
    this.plats = this.plats.sort((n1, n2) => {
      if (n1.idPlat! > n2.idPlat!) {
        return 1;
      }
      if (n1.idPlat! < n2.idPlat!) {
        return -1;
      }
      return 0;
    });
  }

  updatePlat(p: Plat) {
    return this.http.put<Plat>(this.apiURL, p, httpOptions);
  }

  listeMenu():Observable<menuWrapper>{
    return this.http.get<menuWrapper>(this.apiURLmenu);
    }

  consulterMenu(id: number): Menu {
    return this.menus.find(men => men.idMenu == id)!;
  }

  
  rechercherParMenu(idMenu: number):Observable< Plat[]> {
    const url = `${this.apiURL}/menus/${idMenu}`;
    return this.http.get<Plat[]>(url);
    }
 
    rechercherParNom(nom: string):Observable<Plat[]> {
      const url = `${this.apiURL}/platByName/${nom}`;
      return this.http.get<Plat[]>(url);
      }
}
