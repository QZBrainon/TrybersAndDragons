import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    name:string,  
    private _dexterity: number = getRandomInt(1, 10),
    private _race: Race = new Elf(name, _dexterity),
    private _archetype: Archetype = new Mage(name),
  ) {
    this._name = name;
    this._maxLifePoints = _race.maxLifePoints / 2;
    this._lifePoints = _race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: _archetype.energyType, 
      amount: getRandomInt(1, 10) };
  }

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      const newLP = this.lifePoints - damage;
      this._lifePoints = newLP;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    const enemyObject = enemy;
    enemyObject.lifePoints -= this.strength;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}