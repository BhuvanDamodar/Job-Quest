import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-sign-in-home-profile',
  templateUrl: './sign-in-home-profile.component.html',
  styleUrls: ['./sign-in-home-profile.component.css']
})
export class SignInHomeProfileComponent implements OnInit {

  public userName: string='';
  public email: string='';
  public qualification: string='';
  public appliedJobs:any=sessionStorage.getItem("appliedJobs")
  

  public companyName: string='';

  constructor(public authService: UserAuthService, public _router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getUser();
    this.email = this.authService.getEmail();
    this.qualification = this.authService.getQuali();
  }

  btnHome(){
    this._router.navigate(['/sign-in/home'])
  }
}
