import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('players', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional:true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional:true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional:true}),
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  playerCount: number;
  btnText: string= 'Add Player';
  btnTextTwo: string= 'Match Players!'
  playerName: string;
  playerEmail: string;
  players = ['Daniel', 'John', 'Dave'];

  constructor() { }

  ngOnInit() {
    this.playerCount = this.players.length;
  }

  addPlayer(){
    var Player = {
      id: this.playerCount,
      name: this.playerName,
      email: this.playerEmail,
    }
    this.players.push(Player);
    this.playerName= '';
    this.playerEmail= '';
    this.playerCount = this.players.length;
  }

  removePlayer(i){
    this.players.splice(i, 1);
  }

  sortPlayers(){

  }

}
