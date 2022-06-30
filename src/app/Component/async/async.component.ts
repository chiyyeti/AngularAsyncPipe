import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  userData:any = {}
 

  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
   this.userData = this.serv.data()
     
    
    
  }

}
