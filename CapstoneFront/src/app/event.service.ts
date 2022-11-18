import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  // GetAll
  getAll(cb: any){
    //https://localhost:7086/
    this.http.get<Event[]>('https://localhost:7086/Event').subscribe(cb);
  }

  // Get One
  getOne(cb: any, id: number){
    this.http.get<Event>(`https://localhost:7086/Event/${id}`).subscribe(cb);
  }

  // Add
  add(cb: any, e: Event){
    this.http.post<Event>('https://localhost:7086/Event', e).subscribe(cb);
  }

  // Delete
  delete(cb: any, id: number){
    this.http.delete(`https://localhost:7086/Event/${id}`).subscribe(cb);
  }

  // Update
  update(cb: any, e: Event){
    this.http.put('https://localhost:7086/Event', e).subscribe(cb);
  }
  
}
