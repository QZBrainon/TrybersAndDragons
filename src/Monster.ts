import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints:number = 85, private _strength:number = 63) {}

  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }

  receiveDamage(attackPoints: number):number {
    const damage = this._lifePoints - attackPoints;
    if (damage > 0) { this._lifePoints -= damage; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const enemyTarget = enemy;
    enemyTarget.receiveDamage(this._strength);
  }
}