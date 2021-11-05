import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MaisonServiceService} from "../../../services/maison-service.service";
import {Observable} from "rxjs";
import {Maison} from "../../../Model/maison.model";

@Component({
  selector: 'app-edit-maison',
  templateUrl: './edit-maison.component.html',
  styleUrls: ['./edit-maison.component.css']
})
export class EditMaisonComponent implements OnInit {
  public url: string;
  public currentMaison!:Maison;

  constructor(private router:Router, private activatedRoute:ActivatedRoute,
              private maisonService:MaisonServiceService) {
    this.url = atob(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.maisonService.getRessource(this.url)
      .subscribe(data=>{
        this.currentMaison = data;
      },err=>{
        console.log(err);
      });
  }

  onUpdateMaison(value: any) {
    let test=confirm("MAISON WILL BE UPDATED!, SURE?")
    this.maisonService.updateRessource(this.url,value)
      .subscribe(data=>{
        alert("MAISON SUCCESSFULLY UPDATED !")
        this.router.navigateByUrl("/maisons")
      });
  }
}
