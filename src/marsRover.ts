import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";
import { throwStatement } from "@babel/types";

export class MarsRover {
    position: Position;
    direction: Direction;

    constructor(startPosition: Position, startDirection: Direction) {
        this.position = startPosition;  
        this.direction = startDirection;  
    }

    executeCommands(commands: Command[]) {
        commands.forEach(command => this.handleCommand(command));
    }

    private handleCommand(command: Command) {
        switch (command) {
            case Command.TurnLeft :
                this.direction = this.leftDirections().get(this.direction);
                break;
            case Command.TurnRight :
                this.direction = this.rightDirections().get(this.direction);                   
                break;
            case Command.MoveForward:
                this.moveForward();        
                break;
            case Command.MoveBackward:
                this.moveBackward();     
                break;
            default:
                throw "Unknown command!"
        }
    }

    private moveForward() {
        let newX = this.position.x;
        let newY = this.position.y + 1;
        this.position = new Position(newX, newY);
    }

    private moveBackward() {
        let newX = this.position.x;
        let newY = this.position.y - 1;
        this.position = new Position(newX, newY);
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