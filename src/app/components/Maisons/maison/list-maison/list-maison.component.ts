import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {
  AffichageStateENum,
  MainsonCommandEvent,
  MainsonQueryEvent,
  MaisonCommandEventTypes,
  MaisonDataState,
  MaisonQueryEventTypes
} from "../../../../State/MaisonState";
import {EventDrivenServiceService} from "../../../../services/event-driven-service.service";

@Component({
  selector: 'app-list-maison',
  templateUrl: './list-maison.component.html',
  styleUrls: ['./list-maison.component.css']
})
export class ListMaisonComponent implements OnInit {

  @Input() public maisonList$!:Observable<MaisonDataState<any>>;
  //@Output() public commamndEventEmitter:EventEmitter<MainsonCommandEvent> = new EventEmitter<MainsonCommandEvent>();
  //@Output() public queryEventEmitter:EventEmitter<MainsonQueryEvent> = new EventEmitter<MainsonQueryEvent>();

  readonly affichStateEnum = AffichageStateENum;
  public currentPage:number = 0;
  public totalPages!:number;

  constructor(private eventDrivenService : EventDrivenServiceService) { }

  ngOnInit(): void {
  }

  onPageMaison(i: any) {
    //this.queryEventEmitter.emit({type:MaisonQueryEventTypes.ON_PAGE_MAISON,payload:i});
    this.eventDrivenService.publishQueryEvent({type:MaisonQueryEventTypes.ON_PAGE_MAISON,payload:i});
  }


 /* onCommandAction($event: MainsonCommandEvent) {
    this.commamndEventEmitter.emit($event);
  }*/
}
