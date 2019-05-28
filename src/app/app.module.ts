import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ArtistModule } from './artist/artist.module';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArtistModule,    
    AppRoutingModule,           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }