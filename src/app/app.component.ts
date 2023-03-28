import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  menu = false;
  constructor(private route: Router) {}

  ngDoCheck(): void {
    let currentUrl = this.route.url;
    if(currentUrl== '/login' || currentUrl == '/register'){
      this.menu = false;
    }else{
      this.menu = true;
    }
  }


}
