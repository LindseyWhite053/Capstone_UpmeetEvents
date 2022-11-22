import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  TheList: Event[] = [];

  detailsVisible: boolean = false;

  constructor(private EventSrv: EventService) {
          EventSrv.favorites(
            (result: Event[]) => {
              this.TheList = result;
            }
          )
    }

   
  ngOnInit(): void {
  }

  refresh() {
    this.EventSrv.favorites(
      (result: Event[]) => {
        this.TheList = result;
      }
    )
  }

  viewDetails(){
    if (this.detailsVisible == false){
      this.detailsVisible = true;
    }
    else {
      this.detailsVisible = false;
    }
  }

  updateOne(e: Event){
    this.EventSrv.update(
      () => {
        this.refresh();
      },
      e
    )
  }

}
