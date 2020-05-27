import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchText: any): any {
	  if(!value) return null;
	  if(!searchText) return value;
	  searchText = searchText.toLowerCase();
	  return value.filter(function(item){
		   return JSON.stringify(item).toLowerCase().includes(searchText);
	  });
  }

}
