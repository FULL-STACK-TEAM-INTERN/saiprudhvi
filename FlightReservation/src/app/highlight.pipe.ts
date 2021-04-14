import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';//Dom sanitizer added

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}// added constructor for DomSanitizer

  transform(value:string, cityCode:string): any {
    if(cityCode==='AP'||cityCode==='TN'){
    return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+cityCode+'</div>');
    //Trusting Domsanitizer like these
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:red">'+cityCode+'</div>');
    }
  }

}
