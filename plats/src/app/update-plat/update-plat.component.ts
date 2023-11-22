import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements  OnInit {
    currentPlat = new Plat();
    menus! : Menu[];
    updateidmenu: number | undefined;
    constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private platService: platService){}
    updatePlat()
    {
      this.currentPlat.menu = this.menus.
       find(men => men.idMenu == this.updateidmenu)!;
      this.platService.updatePlat(this.currentPlat).subscribe(plts => {
      this.router.navigate(['plats']); }
      );
      }  
   
      ngOnInit(): void {
        this.platService.listeMenu().subscribe(cats => {
          console.log(cats);
          this.menus = cats._embedded.menus;
        });
      
        this.platService.consulterPlat(this.activatedRoute.snapshot.params['id']).subscribe(plts => {
          this.currentPlat = plts;
          this.updateidmenu = this.currentPlat.menu?.idMenu ?? 1; // Use a default value if idMenu is undefined
        });
      }
      

  // Fetch details of the specific plat
  navigateToPlats() {
    this.router.navigate(['/plats']);
  }
 
}
    
  

