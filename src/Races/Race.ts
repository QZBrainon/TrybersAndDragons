export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name() { return this._name; }
  public get dexterity() { return this._dexterity; }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}