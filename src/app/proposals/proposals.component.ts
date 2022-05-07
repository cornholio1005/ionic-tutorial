import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  names = ['Niti', 'Liridon', "Terminator", 'Tribun'];
  texts = ['2 jahre alt', 'Radfreak', "sehr Faul", 'macho hamster'];
  images = ['assets/img/hamster/9.jpg', 'assets/img/hamster/8.jpg', "assets/img/hamster/7.png", 'assets/img/hamster/3.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
