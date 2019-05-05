import { Component } from '@angular/core';
import { IArtist } from './artist';
import { ArtistService } from './artist.service';

@Component({    
    templateUrl:'./artist-list.component.html',
    styleUrls:['./artist-list.component.css']
})
export class ArtistListComponent{
    artists     : IArtist[];
    errMessage  : string;    
    pageTitle   : string    = "Artists list";
    imageWidth  : number    = 50;
    imageMargin : number    = 2;
    showImage   : boolean   = false;
    listFilter  : string    = "";    

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    constructor(private artistService: ArtistService){}

    ngOnInit(): void{
        this.artistService.getArtists().subscribe(
            artists => {
                return this.artists = artists;
            },
            err => this.errMessage = <any>err            
        );
    }
}