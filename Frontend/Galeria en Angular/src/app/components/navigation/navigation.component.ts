import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {
  public element = false;
    
  constructor(private authService: AuthService, private router: Router) { 
   
  }

  ngOnInit() {
    
  }

  Onlogout(): void {
   this.authService.logout(); 

  }

  
  

}
