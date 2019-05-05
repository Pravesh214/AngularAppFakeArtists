import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistViewComponent } from './artist/artist-view.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ArtistListComponent,
    ArtistViewComponent
  ],
  imports: [
    BrowserModule,        
    FormsModule,
    AppRoutingModule,
    HttpClientModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
