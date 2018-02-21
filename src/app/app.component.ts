import { Component } from '@angular/core';
import { ProdserviceService } from './prodservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Shop';
  constructor(private prodservice:ProdserviceService){}
  
       getProducts(){
        this.prodservice.getProducts()
      }
       
 }
