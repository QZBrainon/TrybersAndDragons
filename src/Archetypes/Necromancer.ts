import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType:EnergyType;
  private static _count = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._count += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer._count;
  }
}