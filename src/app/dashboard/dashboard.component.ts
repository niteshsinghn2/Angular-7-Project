import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import "rxjs/add/observable/forkJoin";
import { forkJoin } from "rxjs";
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
powers: Array<any>;
users: any;
id: String;
firstName: String;
lastName: String;
email: String;
text:String = 'Edit';
getReport:any;
editMode: boolean;
clicked = false;
private newUser:any = {};
constructor(private httpService: HttpClient,private router: Router) {
}
 
filterChanged(selectedValue: String){
	if(selectedValue == "0"){
		this.users;
	}
}
	addUser(event:any) {
	this.users.unshift({id:this.id,firstName: this.firstName,lastName: this.lastName,email: this.email,text:this.text});			
	}
	deleteUser(index){
		this.users.splice(index,1);
	}
	editIndex:any;
editUser(event:any,index,user:any) {
	debugger;
let btnEvent = event.target.value;
if(btnEvent == "Edit") {
this.users[index].text = "Save";
user.editMode = !user.editMode;
//this.users.push(user.id,user.firstName,user.lastName,user.email,user.text);			
}
if(btnEvent == "Save") {
this.users[index].text = "Edit";

user.editMode = !user.editMode;
}
}
delete(event:any) {
	let selected = new Array();
for(let i=0; i < this.users.length; i++){
if(this.users[i].Selected){
	debugger;
selected.push(i);
}
}
for(let i = selected.length - 1; i >=0; i--) {
this.users.splice(selected[i],1);
}	
}

download(event:any) {
	debugger;
var urls = ["http://localhost:4200/assets/images/UAT.xlxs"];
//var urls = ["./assets/images/ang.png"];
	var nombre = "Zip_img";
//The function is called
compressed_img(urls,nombre);

function compressed_img(urls,nombre) {
  let zip = new JSZip();
  var count = 0;
  var name = nombre+".zip";
  urls.forEach(function(url){
	  this.http.get(urls).subscribe(url => {
		  //res;
		  //console.log(res)
	  },
	  (err: HttpErrorResponse) => {
		  console.log(err.message);
	  }
	  );
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if(err) {
         throw err; 
      }
       zip.file(url,data,{binary:true},{type:'application/vnd.ms.excel'});
       count++;
       if (count == urls.length) {
         zip.generateAsync({type:'blob'}).then(function(content) {
            saveAs(content, name);
         });
       }
      });
  });
}
/*const zipFile: JSZip = new JSZip();
const reportObs: Observable<any>[] = urls.map(id => {
return this.getReport(id).map(res => {
	zipFile.file(res,urls, {type: 'application/vnd.ms-excel'});
});
});
Observable.forkJoin(reportObs).subscribe(() => {
zipFile.generateAsync({type:'blob'}).then((content) => {
            saveAs(content, 'content.zip');
         });	
	
});	*/
}
   ngOnInit(){
	  this.powers = [
	 'Really Smart', 
	 'Super Flexible',
     'Super Hot', 
	 'Weather Changer'
	 ];
	this.httpService.get('./assets/images/users.json').subscribe(res => {
		  this.users = res;
		  //console.log(res)
	  },
	  (err: HttpErrorResponse) => {
		  console.log(err.message);
	  }
	  );
	  
  }
logOut() : void {
     this.router.navigate([""]);
    
  }

}
