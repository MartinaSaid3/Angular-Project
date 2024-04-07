import { Component } from '@angular/core';
import { ReservationService, ReservationData } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  constructor(private reservationService:ReservationService){}
  
  Reservation:ReservationData[]=[];

  //delete reservasion

  deleteReservation(event:any,UserId:Number){
    if(confirm("are you sure you want to delete this user"))
      {
        event.target.innerText="Deleting....";
        this.reservationService.destroyReservation(UserId).subscribe((res:any)=>{
          this.GetReservationByUserName("Helton")
               alert(res.message)
        });
      }
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this.GetReservationByUserName("Helton");
  }
  // getReservation()
  // {
  //   this.reservationService.GetAll().subscribe((res:any)=>{
  
  //     console.log(res);
  //    this.Reservation=res;
  //     // this.userData=res.userData;
  //   });
  // }
  GetReservationByUserName(Username:string)
  {
    this.reservationService.GetByUserName(Username).subscribe((res:any)=>{
  
      console.log(res);
     this.Reservation=res;
      // this.userData=res.userData;
    });
  }

}
