import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats: Plat[];

  constructor(private platService : platService) {
    this.plats = platService.listePlats()
    }
  ngOnInit(): void {
  
  }
  supprimerPlat(p: Plat)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)

    this.platService.supprimerPlat(p)
  }

}
