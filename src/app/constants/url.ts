import { Injectable } from '@angular/core';

@Injectable()
export class Url {

 staticRoutes ={
 "apiEndPoint": "http://localhost:8080/csAdmin" , 
 "menu":"/assets/menu/menu.json"
 }

 toBackend = {
    "resume" : this.staticRoutes.apiEndPoint + "/resume"

 }


}
