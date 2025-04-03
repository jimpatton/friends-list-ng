import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {
  title: string = "Friend List";
  displayable: boolean = false;
  friends: string[] = ["Andy", "Nick", "Ardrian"];
  newFriend: string = ""

  addFriend() {
    console.log(this.newFriend);
    this.friends.push(this.newFriend);
  }

}


