import { Component } from '@angular/core';
import { IArtist } from './artist';

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

    artists : IArtist[] = [
        {
            "Id":1,
            "Name": "Chris Martin",
            "City": "New York",
            "Age": 30,
            "Profession": "Singer",
            "Available":"Yes",
            "imageUrl":"./sample.jpg"
        },
        {
            "Id":2,
            "Name": "Adele",
            "City": "London",
            "Age": 35,
            "Profession": "Singer",
            "Available":"Yes",
            "imageUrl":"./sample.jpg"
        }          
    ];

    toggleImage():void{
        this.showImage = !this.showImage;
    }
}