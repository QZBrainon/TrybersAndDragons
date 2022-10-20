import Race from './Race';

export default class Orc extends Race {
  private static _count = 0;
  private _maxLifePoints: number;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._count += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc._count;
  }
}
