import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ResumeTableComponent} from "./resume-table/resume-table.component";
import {Cons} from "./providers/cons";


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResumeTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [Cons],
  bootstrap: [AppComponent]
})
export class AppModule { }
