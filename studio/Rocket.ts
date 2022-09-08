
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    addAstronaut(astronaut: Astronaut) {
        throw new Error("Method not implemented.");
    }
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronaut: Astronaut[] = [];
    massKg: number;


    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    }

    sumMass(items: Payload[]): number {
        let out: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            out += items[i].massKg;
        }
        return out;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronaut);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + this.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronuat: Astronaut): boolean {
        if(this.canAdd(astronuat)) {
            this.astronaut.push(astronuat);
            return true;
        } else {
            return false;
        }
    }


 }