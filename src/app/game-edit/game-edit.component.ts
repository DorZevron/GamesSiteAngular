import { GameService } from './../game.service';
import { Game } from './../Game.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

game: Game;
gameId: number;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
 const id = +this.route.snapshot.paramMap.get('id');
 this.gameService.getGameById(id).subscribe((game: Game) => this.game = game);
  }

  onUpdateGame(): void {
    this.gameService.updateGame(this.game).subscribe(data => {
      console.log(data);
      this.navigateBack();
    });
  }

  onDeleteGame(): void {
    this.gameService.deleteGame(this.game.GameID).subscribe(data => {
    console.log(data);
    this.navigateBack();
    });
  }


  navigateBack(): void {
    this.router.navigate(['View']);
  }
}
