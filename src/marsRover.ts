import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";

export class MarsRover {
    position: Position;
    direction: Direction;

    constructor(startPosition: Position, startDirection: Direction) {
        this.position = startPosition;  
        this.direction = startDirection;  
    }

    executeCommands(commands: Command[]) {
        this.direction = Direction.West;
    }
}