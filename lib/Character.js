"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(id, name, profesion) {
        this.id = id;
        this.name = name;
        this.profesion = profesion;
        this._level = 1;
        this._hp = 1000;
    }
    levelUP() {
        return this._level++;
    }
    levelDown() {
        return this._level--;
    }
    getLevel() {
        return this._level;
    }
    changeHp(amount) {
        this._hp += amount;
    }
    getHp() {
        return this._hp;
    }
    static addTeamMember() {
        Character._team++;
    }
    static getTeamMembers() {
        return Character._team;
    }
}
Character._team = 1;
exports.Character = Character;
//# sourceMappingURL=Character.js.map