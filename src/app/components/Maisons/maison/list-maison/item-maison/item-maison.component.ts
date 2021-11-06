import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Maison} from "../../../../../Model/maison.model";
import {MainsonCommandEvent, MaisonCommandEventTypes} from "../../../../../State/MaisonState";
import {EventDrivenServiceService} from "../../../../../services/event-driven-service.service";

@Component({
  selector: 'app-item-maison',
  templateUrl: './item-maison.component.html',
  styleUrls: ['./item-maison.component.css']
})
export class ItemMaisonComponent implements OnInit {

  @Input() public maison!: Maison;
  //@Output() eventCommandEmitter : EventEmitter<MainsonCommandEvent> = new EventEmitter<MainsonCommandEvent>();
  constructor(private eventDrivenService : EventDrivenServiceService) { }

  ngOnInit(): void {
  }

  onEditMaison(m: any) {
      //this.eventCommandEmitter.emit({type:MaisonCommandEventTypes.EDIT_MAISON,payload:m});
    this.eventDrivenService.publishCommandEvent({type:MaisonCommandEventTypes.EDIT_MAISON,payload:m});

  }

  onDeleteMaison(m: any) {
    //this.eventCommandEmitter.emit({type:MaisonCommandEventTypes.DELETE_MAISON,payload:m});
    this.eventDrivenService.publishCommandEvent({type:MaisonCommandEventTypes.DELETE_MAISON,payload:m});
  }
}
