// user.ts

export class User {
    constructor(public name: string, private age: number){}

    isAdult(): boolean{
        return this.age >= 18;
        }
    }