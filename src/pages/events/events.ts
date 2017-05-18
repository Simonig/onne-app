import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EventPage} from "../event/event";
import {EventsService} from "../../services/events";
import {Event} from "../../models/events.model";


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events: Event[] = [];
  errorMessage: string;

  constructor(public navCtrl: NavController,
              private eventsService: EventsService) {
  }

  ionViewWillEnter() {
    console.log('obetener eventos')
    this.getEvents()
  }

  getEvents() {
    this.eventsService.getEvents()
      .subscribe(
        events => {
          this.events = events;
          console.log(events)
        },
        error => this.errorMessage = <any>error
      )
  };


  onLoadEvent(event) {
    console.log(event.id_evento);
    this.navCtrl.setRoot(EventPage, {id_evento: event.id_evento});
  }


}
