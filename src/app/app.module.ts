import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';


/***************************** 
*****Bootstrap Component******
******************************/
import { AppComponent } from './app.component';


/***************************** 
*******App Components*********
******************************/
import { RejectedsComponent } from './rejecteds/rejecteds.component';
import { ErrorsComponent } from './errors/errors.component';
import {ResumeTableComponent} from "./resume-table/resume-table.component";
import { CoreModule } from './coreModule/core.module';

/***************************** 
********Routing Module *******
******************************/
import { AppRoutingModule } from './app-routing.module';

/***************************** 
************ Spinner *********
******************************/
import { NgxSpinnerModule } from 'ngx-spinner';

/***************************** 
***** Login & Secutiry ******
******************************/
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';


/***************************** 
********* Error Page *********
******************************/
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpCustomClient } from './services/httpCustom.service';
import { Cons } from './constants/cons';




@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    RejectedsComponent,
    ErrorsComponent,
    ResumeTableComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    NgxSpinnerModule

  ],
  providers: [AuthService, AuthGuard,HttpCustomClient, Cons],
  bootstrap: [AppComponent]
})
export class AppModule { }
