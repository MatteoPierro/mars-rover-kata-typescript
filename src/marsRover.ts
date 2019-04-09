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
        this.direction = commands[0] === Command.TurnLeft
            ? this.leftDirections().get(this.direction)
            : this.rightDirections().get(this.direction);
    }

    private leftDirections(): Map<Direction, Direction> {
        const leftDirections = new Map<Direction, Direction>();
        
        leftDirections.set(Direction.North, Direction.West);
        leftDirections.set(Direction.South, Direction.East);
        leftDirections.set(Direction.East, Direction.North);
        leftDirections.set(Direction.West, Direction.South);

        return leftDirections;
    }

    private rightDirections(): Map<Direction, Direction> {
        const rightDirections = new Map<Direction, Direction>();
        
        rightDirections.set(Direction.North, Direction.East);
        rightDirections.set(Direction.South, Direction.West);
        rightDirections.set(Direction.East, Direction.South);
        rightDirections.set(Direction.West, Direction.North);
        
        return rightDirections;
    }
}