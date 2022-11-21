import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  TheList: Event[] = [];

  newName: string ='';
  newLocation: string = '';
  newDate: string ='';
  newTime: string = '';
  newCategory: string = '';
  newFavorite: boolean = false;

  addMode: boolean = false;

  favoriteListVisible: boolean = false;

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.eventSrv.getAll(
      (result: Event[]) => {
        this.TheList = result;
      }
    )
  }

  updateOne(e: Event){
    this.eventSrv.update(
      () => {
        this.refresh();
      },
      e
    )
  }

  addModeOn(){
    this.addMode = true;
  }
  
  cancel(){
    this.newName ='';
    this.newLocation = '';
    this.newDate ='';
    this.newTime = '';
    this.newCategory = '';
    this.newFavorite = false;
  
    this.addMode = false;
  }

  add(){
    let newEvent: Event = {
      id: 0,
      name: this.newName,
      location: this.newLocation,
      date: this.newDate,
      time: this.newTime,
      category: this.newCategory,
      favorite: this.newFavorite
    };

    this.eventSrv.add(
      (result: Event) => {
        this.refresh();
      },
      newEvent
    )

      this.cancel()
  }


  showFavoriteList(){
    this.favoriteListVisible = true;
  }

  showAll(){
    this.favoriteListVisible = false;
  }
  

}
