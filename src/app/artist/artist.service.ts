import { Injectable } from '@angular/core';
import { IArtist } from './artist';

@Injectable({
    providedIn:'root'
})
export class ArtistService{
    getArtists() : IArtist[] {
        return[
            {
                "Id":1,
                "Name": "Sonu Nigam",
                "City": "Mumbai",
                "Age": 35,
                "Profession": "Singer",
                "Available":"Yes",
                "imageUrl":"./sample.jpg"
            },
            {
                "Id":2,
                "Name": "Chris Martin",
                "City": "New York",
                "Age": 30,
                "Profession": "Singer",
                "Available":"Yes",
                "imageUrl":"./sample.jpg"
            },
            {
                "Id":3,
                "Name": "Adele",
                "City": "London",
                "Age": 35,
                "Profession": "Singer",
                "Available":"Yes",
                "imageUrl":"./sample.jpg"
            } 
        ]
    }
}