import { Component, OnInit } from '@angular/core';
import {MaisonServiceService} from "../../../services/maison-service.service";
import {Observable, of} from "rxjs";
import {Maison} from "../../../Model/maison.model";
import {catchError, map, startWith} from "rxjs/operators";
import {AffichageStateENum, MaisonDataState} from "../../../State/MaisonState";
import {Router} from "@angular/router";

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {

  public maisonList$!:Observable<MaisonDataState<any>>;
  readonly affichStateEnum = AffichageStateENum;
  public currentPage:number = 0;
  public size:number = 5;
  public totalPages!:number;
  public pages!:Array<number>;
  public currenKeyword:string="";

  constructor(private maisonService:MaisonServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetList() {
     /*this.maisonService.getListMaisons()
      .subscribe(data=>{
        this.maisonList$ = data;
      },err=>{
        console.log(err);
      });*/

    // @ts-ignore
    this.maisonList$ = this.maisonService.getListMaisons(this.currentPage,this.size)
      .pipe(
        map(data=>({
          affichStateEnum:AffichageStateENum.LOADED,
          data:data,
          pages: new Array<number>(data["page"].totalPages)
        })),
        startWith({
          affichStateEnum:AffichageStateENum.LOADING
        }),

        catchError(err=>of({
          affichStateEnum:AffichageStateENum.ERROR,errorM:err.errorMessage()
        }))
      )

  }

  onPageProduct(i: number) {
    this.currentPage = i;
    this.search();
  }

  onSearch(formData: any) {
    this.currentPage = 0;
    this.currenKeyword = formData.keyword;
    this.search()
  }

  search()
  {


    // @ts-ignore
    this.maisonList$ = this.maisonService.searchMaisons(this.currenKeyword,this.currentPage,this.size)
      .pipe(
        map(data=>({
          affichStateEnum:AffichageStateENum.LOADED,
          data:data,
          pages: new Array<number>(data["page"].totalPages)
        })),
        startWith({
          affichStateEnum:AffichageStateENum.LOADING
        }),

        catchError(err=>of({
          affichStateEnum:AffichageStateENum.ERROR,errorM:err.errorMessage()
        }))
      )
  }

  onNewMaison() {

    this.router.navigateByUrl("/newMaison")
  }

  onEditMaison(m: any) {
    let url = m._links.self.href;
    this.router.navigateByUrl("editMaison/"+btoa(url));
  }

  onDeleteMaison(m: any) {
      let url = m._links.self.href;
      let conf = confirm("MAISON WILL BE DELETED !,SURE?")
    if(conf)
      this.maisonService.deleteRessource(url)
        .subscribe(data=>{
          alert("MAISON DELETED WITH SUCCESS !")
          this.onGetList();
        });
  }
}
