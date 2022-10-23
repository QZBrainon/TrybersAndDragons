import Energy from '../Energy';
import SimpleFighter from './SimpleFigther';

export default interface Fighter {
  lifePoints:number
  strength:number
  defense:number
  energy?: Energy

  attack(enemy:Fighter | SimpleFighter):void
  special?(enemy:Fighter | SimpleFighter):void
  levelUp():void
  receiveDamage(attackPoints:number): number
}