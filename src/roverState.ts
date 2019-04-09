import { Direction } from "./direction";
import { Position } from "./position";

export class RoverState {
    position: Position;
    direction: Direction;
    
    constructor(position: Position, direction: Direction) {
        this.position = position;
        this.direction = direction;
    }
}