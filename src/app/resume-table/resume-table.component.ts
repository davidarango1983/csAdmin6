import {Component, OnInit} from '@angular/core';



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



  constructor() { }



  ngOnInit() {

  }
}
