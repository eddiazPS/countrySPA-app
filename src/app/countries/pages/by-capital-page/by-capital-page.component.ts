import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital (term : string):void{
    console.log('desde ByCapitalPage');
    console.log({ term });
  }

}
