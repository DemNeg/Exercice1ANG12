import {Component, OnInit} from '@angular/core';
import {MaisonServiceService} from "../../../services/maison-service.service";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {
  AffichageStateENum,
  MainsonCommandEvent,
  MainsonQueryEvent,
  MaisonCommandEventTypes,
  MaisonDataState,
  MaisonQueryEventTypes
} from "../../../State/MaisonState";
import {Router} from "@angular/router";
import {EventDrivenServiceService} from "../../../services/event-driven-service.service";

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {

  public maisonList$!:Observable<MaisonDataState<any>>;
  public currentPage:number = 0;
  public size:number = 5;
  public totalPages!:number;
  public currenKeyword:string="";

  constructor(private maisonService:MaisonServiceService,private router:Router,
              private eventDrivenService : EventDrivenServiceService) { }

  ngOnInit(): void {
      this.eventDrivenService.sourceQueryEventSubjectObservable
        .subscribe((queryActionEvent:MainsonQueryEvent)=>{
          this.onQueryAction(queryActionEvent);
        });

      this.eventDrivenService.sourceCommandEventSubjectObservable
        .subscribe((commandActionEvent:MainsonCommandEvent)=>{
          this.onCommandAction(commandActionEvent);
        });

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

  onPageMaison(i: number) {
    console.log(i);
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


  onCommandAction($event: MainsonCommandEvent) {
    switch ($event.type) {
      case MaisonCommandEventTypes.EDIT_MAISON : this.onEditMaison($event.payload); break;
      case MaisonCommandEventTypes.DELETE_MAISON : this.onDeleteMaison($event.payload); break;
    }
  }

  onQueryAction($event: MainsonQueryEvent) {
      switch ($event.type) {

        case MaisonQueryEventTypes.GET_ALL_MAISON : this.onGetList(); break;
        case MaisonQueryEventTypes.NEW_MAISON : this.onNewMaison(); break;
        case MaisonQueryEventTypes.SEARCH_MAISON : this.onSearch($event.payload); break;
        case MaisonQueryEventTypes.ON_PAGE_MAISON : this.onPageMaison($event.payload); break;

      }
  }
}
