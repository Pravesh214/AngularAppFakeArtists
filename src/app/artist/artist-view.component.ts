import { Component, OnInit } from '@angular/core';
import { IArtist } from './artist';

@Component({
    
    templateUrl:'./artist-view.component.html'
})
export class ArtistViewComponent{
    pageTitle:string = "Artist View";
    artist : IArtist;

    constructor(){
        
    }

    ngOnInnit(){

    }
}