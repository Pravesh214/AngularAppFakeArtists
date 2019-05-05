import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistViewComponent } from './artist/artist-view.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
  {path:'artists', component:ArtistListComponent},
      {path:'artists/:Id', component:ArtistViewComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
