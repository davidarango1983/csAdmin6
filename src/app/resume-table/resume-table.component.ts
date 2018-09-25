import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpCustomClient } from '../services/httpCustom.service';
import { Url } from '../constants/url';
import { isNullOrUndefined } from 'util';
import { of, Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'



@Component({
  selector: 'app-resume-table',
  templateUrl: './resume-table.component.html',
  styleUrls: ['./resume-table.component.scss'],
 })
export class ResumeTableComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService, private http: HttpCustomClient,private url: Url) { }
  resume: Resume[];
  state = 'normal';
  total: Subscription;
  conteo = 0;
  finished: boolean = false;

  ngOnInit() {

    this.http.get(this.url.toBackend.resume).subscribe(result=>{
      if (!isNullOrUndefined(result)) {

        this.resume = result;
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


 

}


export interface Resume {

  error: number;
  idCs: number;
  name: string;
  pending: number;
  reject: number;

}
