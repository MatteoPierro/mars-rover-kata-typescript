import { Position } from "./position";
import { Direction } from "./direction";

export class MarsRover {
    position: Position;
    direction: Direction;

    constructor(startPosition: Position, startDirection: Direction) {
        this.position = startPosition;  
        this.direction = startDirection;  
    }
}