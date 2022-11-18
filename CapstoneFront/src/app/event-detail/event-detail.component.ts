import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event = {
    id: 0,
    name: 'Blink 182',
    location: 'DTE',
    date: '12/1/2022',
    time: '7:30pm',
    category: 'Music',
    favorite: false,
  }

  detailsVisible: boolean = false;

  @Output() update: EventEmitter<Event> = new EventEmitter<Event>();
  
  constructor() { }

  ngOnInit(): void {
  }

  favorite(){
    if (this.event.favorite == false){
      this.event.favorite = true;
    }
    else
    {
      this.event.favorite = false;
    }

    this.update.emit(this.event);
  }

  viewDetails(){
    if (this.detailsVisible == false){
      this.detailsVisible = true;
    }
    else {
      this.detailsVisible = false;
    }
  }

}
