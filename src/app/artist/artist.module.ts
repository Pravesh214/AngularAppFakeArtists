import { NgModule } from '@angular/core';
import { ArtistListComponent } from './artist-list.component';
import { ArtistViewComponent } from './artist-view.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArtistViewGuard } from './artist-view.guard';

@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistViewComponent
  ],
  imports: [  
    SharedModule,  
    RouterModule.forChild([
      {path:'artists', component:ArtistListComponent},
      {path:'artists/:id', canActivate : [ArtistViewGuard], component:ArtistViewComponent},
    ]),       
  ]
})
export class ArtistModule { }
