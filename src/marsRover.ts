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
        const leftDirections = new Map<Direction, Direction>();
        leftDirections.set(Direction.North, Direction.West);
        leftDirections.set(Direction.South, Direction.East);
        leftDirections.set(Direction.East, Direction.North);
        leftDirections.set(Direction.West, Direction.South);

        const rightDirections = new Map<Direction, Direction>();
        rightDirections.set(Direction.North, Direction.East);
        rightDirections.set(Direction.South, Direction.West);
        rightDirections.set(Direction.East, Direction.South);
        rightDirections.set(Direction.West, Direction.North);
        
        this.direction = commands[0] === Command.TurnLeft
            ? leftDirections.get(this.direction)
            : rightDirections.get(this.direction);
    }
}