import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private fighter:Fighter, 
    private enemies: Array<Monster | Fighter>,
  ) {
    super(fighter);
  }

  fight(): number {
    while (
      this.fighter.lifePoints > 0 
      && this.enemies.forEach((enemy) => enemy.lifePoints > 0)) {
      this.fighter.attack(this.enemies.map((enemy) => enemy));
      this.enemies.forEach((enemy) => enemy.attack(this.fighter));
    }
    return super.fight();
  }
}

function progressNotification(notificationType:string, message:string) {
  return (`${notificationType}: ${message}`);
}

progressNotification('Email', 'alou alou');