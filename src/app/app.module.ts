import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeTableComponent } from './resume-table/resume-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RejectedsComponent } from './rejecteds/rejecteds.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResumeTableComponent,
    ErrorPageComponent,
    RejectedsComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
