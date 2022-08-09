import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  attack(fighter: Fighter): void; 
  special?(fighter: Fighter): void; 
  levelUp(): void;
}
