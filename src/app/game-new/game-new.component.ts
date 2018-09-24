import { GameService } from './../game.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form.value);
    this.gameService.addNewGame(form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['View']);
    });
  }
}
