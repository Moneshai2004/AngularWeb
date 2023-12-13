import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
isMenuScrolled = false;
isSidebarShowing= false;


@HostListener('window:scroll',['$event'])
scrollcheck(){
  if (window.pageYOffset >100)
   this.isMenuScrolled=true;
  else
  this.isMenuScrolled=false;
console.log(this.isMenuScrolled)

}

openSideBar(){
  this.isSidebarShowing = true;

}
closeSideBar(){
  this.isSidebarShowing = false;

}





}
