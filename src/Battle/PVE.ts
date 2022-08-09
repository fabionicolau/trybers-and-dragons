import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, environment: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._environment = [...environment];
  }

  get player1(): Fighter {
    return this._player;
  }

  get player2(): (SimpleFighter | Fighter)[] {
    return this._environment;
  }

  fight(): number {
    while (
      this._player.lifePoints > 0
       && this._environment.some((monster) => monster.lifePoints > 0)
    ) {
      this._environment.map((monster) => monster.attack(this._player));
      this._environment.map((monster) => this._player.attack(monster));
    }

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
