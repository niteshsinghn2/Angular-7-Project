import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { IHero } from './ihero';
//import heroes from '../../assets/images/heroes.json';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HeroService {
	httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
	  'Access-Control-Allow-Origin': 'http://localhost:4200',
	  'Access-Control-Allow-Method': 'POST',
	  'Authorization':'my-auth-token',
	  'Accept':'*/*'
    })
  } 
	
 public url:string = "./assets/images/heroes.json";
 //private baseUrl:string = "https://api.github.com/users"
  constructor(private http: HttpClient) { }
  getHeroes(): Observable<IHero[]> {
	return this.http.get<IHero[]>(this.url).pipe(retry(1),catchError(this.handleError))
  }
	//.map(res => res).subscribe(data => {
		//console.log(data);
	//getHeroes() {
	//return this.http.get(this.baseUrl).pipe(retry(1),catchError(this.handleError))	
  //}
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
	 
	 
  }

}
