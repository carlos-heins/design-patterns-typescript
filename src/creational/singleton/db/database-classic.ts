import { User } from "../interfaces/User";

export class DataBaseClassic {
    private static instance: DataBaseClassic | null = null;
    private users: User[] = [];
    private constructor() { }
    public static getInstance(): DataBaseClassic {
        if (!DataBaseClassic.instance) {
            DataBaseClassic.instance = new DataBaseClassic();
        }
        return DataBaseClassic.instance;
    }
    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }
    show():void {
        for(const user of this.users) {
            console.log(user);
        }
    }
}