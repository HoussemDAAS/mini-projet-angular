import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit{
  newPlat = new Plat();
  constructor(private platService: platService){}
  addPlat(){
    this.platService.ajouterPlat(this.newPlat)
    console.log(this.newPlat);
    }
  ngOnInit(): void {
   
  }

}
