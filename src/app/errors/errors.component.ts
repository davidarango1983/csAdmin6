import { Component, OnInit } from '@angular/core';
import { Filters } from '../services/filters';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor(private filters: Filters) { }

  ngOnInit() {
    console.log(this.filters)
  }

}
