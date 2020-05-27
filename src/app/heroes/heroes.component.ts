import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
//import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {HttpErrorResponse} from "@angular/common/http";




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
@ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;	
heroes: any;
public searchText:String;
constructor(private heroService: HeroService,private router: Router) { }

  
  
  ngOnInit(){
	  debugger;
	  this.heroService.getHeroes().subscribe(res => this.heroes = res);
  }
  logOut() : void {
     this.router.navigate([""]);
    
  }
  public onSlideleft() : void {
	  debugger;
	  setTimeout(() => {
	this.panel.nativeElement.scrollLeft += 20;
//this.panel.nativeElement.scrollTo({ left: (this.panel.nativeElement.scrollLeft + 300), behavior: 'smooth' });	
console.log(this.panel.nativeElement.scrollLeft)
	  },50);
  }
p:number = 1;

}
