import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainsonQueryEvent, MaisonQueryEventTypes} from "../../../../State/MaisonState";
import {EventDrivenServiceService} from "../../../../services/event-driven-service.service";

@Component({
  selector: 'app-child-nav-bar',
  templateUrl: './child-nav-bar.component.html',
  styleUrls: ['./child-nav-bar.component.css']
})
export class ChildNavBarComponent implements OnInit {
  //@Output() eventEmitter:EventEmitter<MainsonQueryEvent> = new EventEmitter<MainsonQueryEvent>();

  constructor(private eventDrivenService : EventDrivenServiceService) { }

  ngOnInit(): void {
  }

  onGetList() {
      //this.eventEmitter.emit({type:MaisonQueryEventTypes.GET_ALL_MAISON})
      this.eventDrivenService.publishQueryEvent({type:MaisonQueryEventTypes.GET_ALL_MAISON});
  }

  onNewMaison() {
    //this.eventEmitter.emit({type:MaisonQueryEventTypes.NEW_MAISON})
    this.eventDrivenService.publishQueryEvent({type:MaisonQueryEventTypes.NEW_MAISON});
  }

  onSearch(value: any) {
    //this.eventEmitter.emit({type:MaisonQueryEventTypes.SEARCH_MAISON,payload:value})
    this.eventDrivenService.publishQueryEvent({type:MaisonQueryEventTypes.SEARCH_MAISON,payload:value});
  }
}
