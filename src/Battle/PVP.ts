import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private fighter1: Fighter,
    private fighter2:Fighter,
  ) {
    super(fighter1);
  }

  fight(): number {
    while (this.fighter1.lifePoints > 0 && this.fighter2.lifePoints > 0) {
      this.fighter1.attack(this.fighter2);
      this.fighter2.attack(this.fighter1);
    }
    return super.fight();
  }
}