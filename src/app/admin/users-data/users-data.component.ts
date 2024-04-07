import { Component } from '@angular/core';
import { UserService, Users } from '../../services/user.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrl: './users-data.component.css'
})
export class UsersDataComponent {
  constructor(private userservice:UserService){}
// {
// this.User.getData().subscribe(x=>{
// this.data.push(x.constructor)
// });
  
// }
// userData!:Users[];
users:Users[]=[];
deleteUser(event:any,UserId:Number){
  if(confirm("are you sure you want to delete this user"))
    {
      event.target.innerText="Deleting....";
      this.userservice.destroyUser(UserId).subscribe((res:any)=>{
        this.getUserData()
             alert(res.message)
      });
    }
}
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.getUserData();
}
getUserData()
{
  this.userservice.UserRole().subscribe((res:any)=>{

    console.log(res);
   this.users=res;
    // this.userData=res.userData;
  });
}
getUserDataByUserName(Username:string)
{
  this.userservice.UserRole().subscribe((res:any)=>{

    console.log(res);
   this.users=res;
    // this.userData=res.userData;
  });
}
}
