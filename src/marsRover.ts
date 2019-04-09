import { Position } from "./position";

export class MarsRover {
    position:Position;

    constructor(x: number, y: number) {
        this.position = new Position(x, y);    
    }
}