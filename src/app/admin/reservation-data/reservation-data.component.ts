import { Component } from '@angular/core';
import { ReservationService, ReservationData } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-data',
  templateUrl: './reservation-data.component.html',
  styleUrl: './reservation-data.component.css'
})
export class ReservationDataComponent {
  constructor(private reservationService:ReservationService){}
  
  Reservation:ReservationData[]=[];

  //delete reservasion

  deleteReservation(event:any,UserId:Number){
    if(confirm("are you sure you want to delete this user"))
      {
        event.target.innerText="Deleting....";
        this.reservationService.destroyReservation(UserId).subscribe((res:any)=>{
          this.getReservation()
               alert(res.message)
        });
      }
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this.getReservation();
  }
  getReservation()
  {
    this.reservationService.GetAll().subscribe((res:any)=>{
  
      console.log(res);
     this.Reservation=res;
      // this.userData=res.userData;
    });
  }
  // getReservationById(Username:string)
  // {
  //   this.reservationService.GetAll().subscribe((res:any)=>{
  
  //     console.log(res);
  //    this.Reservation=res;
  //     // this.userData=res.userData;
  //   });
  // }

}
