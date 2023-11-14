import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements  OnInit {
    currentPLat = new Plat();
    constructor(private activatedRoute: ActivatedRoute,
    private platService: platService) { }
    ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentPLat = this.platService.consulterPlat(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentPLat);
    } 
   
  }

