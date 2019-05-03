import { Injectable } from '@angular/core';
import { IArtist } from './artist';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})

export class ArtistService{

    private artistUrl = 'api/artists/artists.json';
    
    constructor(private http: HttpClient){}
    
    getArtists() : Observable<IArtist[]> {
        return this.http.get<IArtist[]>(this.artistUrl).pipe(
            tap(data => console.log('All: '+ JSON.stringify(data))),
            catchError(this.hadleError)
        );
    }

    private hadleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `and error occured: ${err.error.message}`;
        }else{
            errorMessage = `Server returned error with code: ${err.status} and message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}