import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  form : boolean = false;
  
  constructor() {
    
   }

  ngOnInit(): void {
    

  }
  
setFormTrue(){
  this.form = true;
  console.log("Teste");
}

}
