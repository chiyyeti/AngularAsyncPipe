import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AsyncComponent } from './Component/async/async.component';
import { DynamicComponent } from './Component/dynamic/dynamic.component';
import { LazyComponent } from './featureModule/lazy/lazy.component';
import { LazyModule } from './featureModule/lazy/lazy.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AsyncPipe';

  asyncComponent :any
  show :boolean = false;

 

/*
 // Dynamic component loading 
  dynamic : any
  
  addDynamic(){
    this.dynamic = DynamicComponent;
  }

  */

  promise  : Promise<any>; 

  observable$ : Observable<any>
  observableData!: number;

  constructor(){
    this.promise = this.getPromise();

    this.observable$ = this.getObservable();
    this.subscribaleObservable();
   

  }

  ngOnInit(): void {
    // this.addDynamic();


  }

  // async pipe subscribe to promise

  getPromise(){
    return new Promise((resolve,reject) =>{

      setTimeout(() => {
        resolve("Promise is completed. Data recieved .");
      
        
      }, 2000);
      
    })
  }

  // async pipe subscribe to observables


getObservable(){
  return interval(2000).pipe(take(5),map(value=> value +1))
}

subscribaleObservable(){
  this.observable$.subscribe(value => this.observableData = value);
}



asyncApi(){
  this.asyncComponent = AsyncComponent;
  
}
showComponent(){
  this.show =!this.show

}

 



}


