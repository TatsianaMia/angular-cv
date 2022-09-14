import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMainPageVisible: boolean = true;
  isMainPortfolioVisible: boolean = false;
  isMainContactsVisible: boolean = false;
  



showMainPage() {
  this.isMainPageVisible = true;
  this.isMainPortfolioVisible= false;
  this.isMainContactsVisible= false;
}
showPortfolioPage() {
  this.isMainPageVisible = false;
  this.isMainPortfolioVisible = true;
  this.isMainContactsVisible= false;
}
showContactsPage() {
  this.isMainPageVisible= false;
  this.isMainPortfolioVisible = false;
  this.isMainContactsVisible= true;
}

}