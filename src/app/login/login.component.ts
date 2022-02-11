import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/product-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
    model : any={};  
    errorMessage:string = '';
  
    constructor(private router:Router, private service : ProductServiceService) { }
  
    ngOnInit(): void {
    }

    login(){
      if (this.model.UserName == undefined || this.model.Password == undefined)
      {
        this.errorMessage = "Username & Password cannot be empty.!";
        return;
      }
      this.errorMessage ="";  
      this.service.SetUserName(this.model.UserName);
      this.router.navigate(['Dashboard']);
    }
  }
