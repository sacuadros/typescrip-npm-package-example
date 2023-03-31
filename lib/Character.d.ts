export declare class Character {
    readonly id: number;
    name: string;
    profesion?: string | undefined;
    private static _team;
    private _level;
    private _hp;
    constructor(id: number, name: string, profesion?: string | undefined);
    levelUP(): number;
    levelDown(): number;
    getLevel(): number;
    changeHp(amount: number): void;
    getHp(): number;
    static addTeamMember(): void;
    static getTeamMembers(): number;
}
//# sourceMappingURL=Character.d.ts.map