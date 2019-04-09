import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";
import { RoverState } from "./roverState";

export class MarsRover {
    state: RoverState;

    constructor(startPosition: Position, startDirection: Direction) { 
        this.state = new RoverState(startPosition, startDirection);
    }

    executeCommands(commands: Command[]) {
        commands.forEach(command => {
            this.state = this.execute(command);
        });
    }

    private execute(command: Command): RoverState  {
        switch (command) {
            case Command.TurnLeft :
                return turnLeft(this.state);
            case Command.TurnRight :
                return turnRight(this.state);
            case Command.MoveForward:
                return moveForward(this.state);
            case Command.MoveBackward:
                return moveBackward(this.state);
            default:
                throw "Unknown command!"
        }
    }
}

function turnLeft(currentState: RoverState): RoverState {
    let newPosition = currentState.position;
    let newDirection = leftDirections().get(currentState.direction);
    return new RoverState(newPosition, newDirection);
}

function turnRight(currentState: RoverState): RoverState {
    let newPosition = currentState.position;
    let newDirection = rightDirections().get(currentState.direction);
    return new RoverState(newPosition, newDirection);
}

function moveForward(currentState: RoverState): RoverState {
    let newX = currentState.position.x;
    let newY = currentState.position.y + 1;
    let newPosition = new Position(newX, newY);
    let newDirection = currentState.direction;
    return new RoverState(newPosition, newDirection);
}

function moveBackward(currentState: RoverState): RoverState {
    let newX = currentState.position.x;
    let newY = currentState.position.y - 1;
    let newPosition = new Position(newX, newY);
    let newDirection = currentState.direction;
    return new RoverState(newPosition, newDirection);
}

function leftDirections(): Map<Direction, Direction> {
    const leftDirections = new Map<Direction, Direction>();
    
    leftDirections.set(Direction.North, Direction.West);
    leftDirections.set(Direction.South, Direction.East);
    leftDirections.set(Direction.East, Direction.North);
    leftDirections.set(Direction.West, Direction.South);

    return leftDirections;
}

function rightDirections(): Map<Direction, Direction> {
    const rightDirections = new Map<Direction, Direction>();
    
    rightDirections.set(Direction.North, Direction.East);
    rightDirections.set(Direction.South, Direction.West);
    rightDirections.set(Direction.East, Direction.South);
    rightDirections.set(Direction.West, Direction.North);
    
    return rightDirections;
}