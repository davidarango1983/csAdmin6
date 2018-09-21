import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpCustomClient {

  constructor(private http: HttpClient) {}

   private createAuthorizationHeaderLogin(httpHeaders: HttpHeaders) {
    httpHeaders.set('Authorization', 'Basic Y2xpZW50MTpjbGllbnQx'); 
   }

   createAuthorizationHeader(headers: HttpHeaders) {
     headers.set('Authorization', 'Basic Y2xpZW50MTpjbGllbnQx'); 
   }

  /*
  *
  * CUSTOM GET 
  *  
  */
   get(url) : Observable<any> {
     let httpHeaders = new HttpHeaders();
     this.createAuthorizationHeader(httpHeaders);
     let options = {
       headers: httpHeaders
     };
     options.headers=httpHeaders; 
     return this.http.get(url,options);
   }


  /*
  *
  * CUSTOM POST 
  *  
  */
   post(url, data) : Observable<any> {
     let httpHeaders = new HttpHeaders();
     this.createAuthorizationHeader(httpHeaders);
     let options = {
       headers:{}
     };
     options.headers=httpHeaders;
     let body;

     return this.http.post(url,body,options);
   }


  /*
  *
  * CUSTOM POST FOR LOGIN
  *  
  */
   login(url, data) : Observable<any> {
     
     let headers = new HttpHeaders().append('Authorization', 'Basic Y2xpZW50MTpjbGllbnQx');
     let options = {"client_id":"client1","client_secret":"client1","grant_type":"password","scope":"read" };
     return this.http.post(url, options, {"headers":headers});
   }
}