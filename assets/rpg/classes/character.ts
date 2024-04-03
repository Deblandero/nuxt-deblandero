interface ICharacter {
  name: string;
}

class Character {
  _name!: string;

  constructor(name = '') {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  public set name(value: string) {
    this._name = value
  }
}

export default Character