import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTexts = [
    "Hallo ich bin Hamster, bin hier um neue freundschafften zu finden",
    "Hallo zusammen, ich hofe es geht euch gut",
    "ich möchte nach New Yourk",
    "Schönes Weter Heute ;"
  ]

  postImages = [  
    "assets/img/hamster/2.jpg",
    "assets/img/hamster/3.jpg",
    "assets/img/hamster/4.jpg",
    "assets/img/hamster/5.jpg"
]

  buttonClicked(){
    alert('Hallo, wie geht es dir');
  }
}
