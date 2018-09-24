import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpCustomClient } from '../services/httpCustom.service';
import { Url } from '../constants/url';
import { isNullOrUndefined } from 'util';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-resume-table',
  templateUrl: './resume-table.component.html',
  styleUrls: ['./resume-table.component.scss']
})
export class ResumeTableComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService, private http: HttpCustomClient,private url: Url) { }
  resume: Resume[];

  ngOnInit() {

    this.http.get(this.url.toBackend.resume).subscribe(result=>{
      if (!isNullOrUndefined(result)) {

        this.resume = result;
      }

    },error=>{
      console.log("An error has ocurred while loading resume");
    });


    
  
}
}

export interface Resume {

  error: number;
  idCs: number;
  name: string;
  pending: number;
  reject: number;

}
