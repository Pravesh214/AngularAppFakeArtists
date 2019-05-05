import { Component, OnInit } from '@angular/core';
import { IArtist } from './artist';
import { ActivatedRoute, Router } from '@angular/router';

@Component({    
    templateUrl:'./artist-view.component.html'
})
export class ArtistViewComponent implements OnInit{
    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;
        this.id = `${id}`;
    }
    
    pageTitle:string = "Artist View";
    artist : IArtist;
    id:string;

    constructor(private route:ActivatedRoute,
                private router:Router){        
    }

    onBack(): void{
        this.router.navigate(['/artists']);
    }
}