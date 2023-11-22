import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { Menu } from '../model/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit{
  newPlat = new Plat();
  menus! : Menu[];
  newmenu! : Menu;
  newidmenu! : number;
  constructor(private platService: platService
    ,private router :Router){}
    addPlat(){
      this.newPlat.menu = this.menus.find(men => men.idMenu == this.newidmenu)!;
      this.platService.ajouterPlat(this.newPlat)
      .subscribe(plts => {
      console.log(plts);
      this.router.navigate(['']);
      });
      }
    ngOnInit(): void {
      this.platService.listeMenu().subscribe(cats => {console.log(cats);
        this.menus = cats._embedded.menus;
        });
      }
  navigateToPlats() {
    this.router.navigate(['/plats']);
  }
}
