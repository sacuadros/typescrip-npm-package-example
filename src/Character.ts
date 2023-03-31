export class Character {
  private static _team = 1;
  private _level = 1;
  private _hp = 1000;
  constructor(
    public readonly id: number,
    public name: string,
    public profesion?: string,
  ) {}

  levelUP(): number {
    return this._level++;
  }
  levelDown(): number {
    return this._level--;
  }
  getLevel(): number {
    return this._level;
  }

  changeHp(amount: number) {
    this._hp += amount;
  }

  getHp(): number {
    return this._hp;
  }

  static addTeamMember() {
    Character._team++;
  }
  static getTeamMembers() {
    return Character._team;
  }
}
