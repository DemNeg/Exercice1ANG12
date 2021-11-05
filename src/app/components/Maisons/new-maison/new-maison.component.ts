import { Component, OnInit } from '@angular/core';
import {host} from "@angular-devkit/build-angular/src/test-utils";
import {MaisonServiceService} from "../../../services/maison-service.service";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-new-maison',
  templateUrl: './new-maison.component.html',
  styleUrls: ['./new-maison.component.css']
})
export class NewMaisonComponent implements OnInit {

  constructor(private maisonService : MaisonServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveMaison(value: any) {
    let url = environment.host+"maisons";
    this.maisonService.saveRessource(url,value)
      .subscribe(data=>{
        alert("MAISON SUCCESSFULLY ADDED!");
        this.router.navigateByUrl("/maisons")
      });

  }
}
