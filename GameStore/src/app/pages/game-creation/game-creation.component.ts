import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.scss']
})
export class GameCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  createGame = new FormGroup({
    gameName: new FormControl(''),
    bundle: new FormControl(''),
    owner:new FormControl('')
  })
  created(){
    console.log(this.createGame.value)
  }
}
