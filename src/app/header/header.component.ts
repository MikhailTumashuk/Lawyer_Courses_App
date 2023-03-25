import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  to_about(){
    document.getElementById("infographics_header")?.scrollIntoView({behavior:"smooth"});
  }

  to_reviews(){
    document.getElementById("reviews_header")?.scrollIntoView({behavior:"smooth"});
  }

  to_chat_bot(){
    document.getElementById("register_header")?.scrollIntoView({behavior:"smooth"});
  }
}
