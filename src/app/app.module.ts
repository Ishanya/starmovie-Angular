import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { StarMovieServiceService } from './star-movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StarMovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
