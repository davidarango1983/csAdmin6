import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cons} from "../providers/cons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = '../assets/menu/menu.json';
  results={};

  constructor(private http: HttpClient, private cons: Cons) {

  }

  ngOnInit() {
    this.loadMenu();
  }


  loadMenu(){

    this.http.get(this.menu).subscribe(data => {
      this.results = data;
    });
    }

}
