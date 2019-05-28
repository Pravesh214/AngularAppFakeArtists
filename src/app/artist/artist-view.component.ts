import { Component, OnInit } from '@angular/core';
import { IArtist } from './artist';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from './artist.service';

@Component({    
    templateUrl:'./artist-view.component.html'
})

export class ArtistViewComponent implements OnInit{
        
    pageTitle = 'Artist View';
    errorMessage = '';
    artist: IArtist | undefined;

    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
        const id = +param;
        this.getArtist(id);
        }
    }
    
    constructor(private route:ActivatedRoute,
                private router:Router,
                private artistService:ArtistService){        
    }

    onBack(): void{
        this.router.navigate(['/artists']);
    }

    getArtist(id: number) {
        this.artistService.getArtist(id).subscribe(
            artist => this.artist=artist,
            error => this.errorMessage=<any>error
        );        
    }
}
