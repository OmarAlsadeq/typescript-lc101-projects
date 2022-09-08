import {Payload} from "./Payload";



export class Cargo implements Payload {
    // properties and methods
    massKg: number;
    name: string;


    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
 }
 