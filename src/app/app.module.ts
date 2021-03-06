import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TestappService} from './officer/testapp.service';
import { OfficerComponent } from './officer/officer.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SearchbyFirstNamePipe } from './searchby-first-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OfficerComponent,
    SearchPipe,
    SearchbyFirstNamePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
