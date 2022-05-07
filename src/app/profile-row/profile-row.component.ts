import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  names = ['Niti', 'Liridon', "Terminator", 'Tribun'];
  texts = ['2 jahre alt', 'Radfreak', "sehr Faul", 'macho hamster'];
  images = ['assets/img/hamster/9.jpg', 'assets/img/hamster/8.jpg', "assets/img/hamster/7.png", 'assets/img/hamster/3.jpg'];
  
  @Input() img:String='assets/img/hamster/3.jpg';
  @Input() description:String='whatever';
  @Input() name:String="NiTralalat";
  @Input() canFollow =true;

  constructor(public fs: FriendService ) { }
  ngOnInit(): void {
  }

}
