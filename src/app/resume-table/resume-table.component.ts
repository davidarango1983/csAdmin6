import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpCustomClient } from '../services/httpCustom.service';
import { isNullOrUndefined } from 'util';
import { of, Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Url } from 'src/app/services/constants/url';
import { Filters } from '../services/filters';
import { Router } from '@angular/router';




@Component({
  selector: 'app-resume-table',
  templateUrl: './resume-table.component.html',
  styleUrls: ['./resume-table.component.scss'],
 })
export class ResumeTableComponent implements OnInit {
 

  constructor(private spinner: NgxSpinnerService, private http: HttpCustomClient,private urls: Url, public filters : Filters, public router: Router) { }
  resume: Resume[];
  state = 'normal';
  total: Subscription;
  conteo = 0;
  finished: boolean = false;
  totals ={
    "errors" : 0, 
    "rejects" : 0,
    "pending" : 0

  }
  ngOnInit() {

    this.http.get(this.urls.toBackend.resume).subscribe(result=>{
      if (!isNullOrUndefined(result)) {

        this.resume = result;
        
        this.resume.forEach(element => {
          
          this.totals ={
            "errors" : this.totals.errors + element.error, 
            "rejects" : this.totals.rejects + element.reject,
            "pending" : this.totals.pending + element.pending
  
          }
          
        });
        
      }

    },error=>{
      console.log("An error has ocurred while loading resume");
    });

  
  }


ngAfterViewInit(){
  
  const myNumbers = interval(1)
  .pipe(map(
    (data: number) => {
      return data + 1;
    }
  ));
this.total = myNumbers.subscribe(
  (number: number) => {
    console.log(number);
    this.conteo=number;
    if(this.conteo==200){
      this.total.unsubscribe();
      this.finished=true;
      
    }
  }

  
);



}

setFilter(filter){
  this.filters[filter.route]={
    "name":filter.name,
    "value":filter.value
   };
   this.router.navigate(['/csAdmin/'+filter.route]);

}


 

}


export interface Resume {

  error: number;
  idCs: number;
  name: string;
  pending: number;
  reject: number;

}


