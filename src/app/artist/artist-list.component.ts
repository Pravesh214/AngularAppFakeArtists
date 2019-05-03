import { Component } from '@angular/core';
import { IArtist } from './artist';
import { ArtistService } from './artist.service';

@Component({
    selector: 'app-artist-list',
    templateUrl:'./artist-list.component.html',
    styleUrls:['./artist-list.component.css']
})
export class ArtistListComponent{
    pageTitle   : string    ="Artists list";
    imageWidth  : number    = 50;
    imageMargin : number    = 2;
    showImage   : boolean   = false;
    listFilter  : string    ="";
    artists     : IArtist[] ;

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    constructor(private artistService: ArtistService){}

    ngOnInit(): void{
        this.artists = this.artistService.getArtists();
    }
}