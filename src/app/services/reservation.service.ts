import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../_modules/reservation';
export interface ReservationData{
  // id:number,
  userName: string,
  date:string,
  numOfGuests: number,
  venueId: number,
  specialRequests: string,
  email: string
  service: string
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) {}
  GetAll()
  {
    let Url=`http://localhost:5291/api/Reservation
    `;
    
    return this.http.get(Url);
  }
  GetByUserName(UserName:string)
  {
    let Url="http://localhost:5291/api/Reservation/"+UserName;
    return this.http.get(Url);
  }
//   UpdateReservation(ReserveId :Number)
//   {
//     return this.http.put("http://localhost:5291/api/Reservation/",ReserveId);
//   }
  destroyReservation(ReserveId :Number)
  {
    let Url="http://localhost:5291/api/Reservation/"+ReserveId;
    return this.http.delete(Url);
  }
}
