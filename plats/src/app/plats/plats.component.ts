import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats!: Plat[];  // Definite assignment assertion

  constructor(private platService: platService) {
    platService.listePlats().subscribe(values => {
      this.plats = values;
      console.log(this.plats);
    });
  }

  ngOnInit(): void {
    this.chargerplats();
  }

  chargerplats() {
    this.platService.listePlats().subscribe(plts => {
      console.log(plts);
      this.plats = plts;
    });
  }

  supprimerPlat(p: Plat) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf && p.idPlat !== undefined) {
      this.platService.supprimerPlat(p.idPlat).subscribe(() => {
        console.log("plat supprimé");
        this.chargerplats();
      });
    }
  }
  
}
