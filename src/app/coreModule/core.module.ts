import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AppRoutingModule} from "../app-routing.module";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class CoreModule {}
