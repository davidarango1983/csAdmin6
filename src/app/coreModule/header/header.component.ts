import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cons } from '../../constants/cons';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cons = new Cons();
  routes: RoutesMenu[];

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  ngOnInit() {
    this.loadMenu().subscribe(result => {
      if (!isNullOrUndefined(result)) {

        this.routes = result;
      }
    }, error => {
      console.log(<any>error);
    }
  );
  console.log('Cargando Menu.. finalizado');
  }


  loadMenu(): Observable<any> {

    console.log('Cargando Resumen');
    return this.http.get(this.cons.staticRoutes.menu);
  }


}

export class RoutesMenu {

  name: string;
  link: string;
  icon: string;
  class: string;
  onclick: string;

}


