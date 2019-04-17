import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Direction } from "../direction";

export class TurnLeftCommandExecutor implements CommandExecutor{
    execute(currentState: RoverState): RoverState {
        let newPosition = currentState.position;
        let newDirection = leftDirections().get(currentState.direction);
        return new RoverState(newPosition, newDirection);
    }
}

function leftDirections(): Map<Direction, Direction> {
    const leftDirections = new Map<Direction, Direction>();

    leftDirections.set(Direction.North, Direction.West);
    leftDirections.set(Direction.South, Direction.East);
    leftDirections.set(Direction.East, Direction.North);
    leftDirections.set(Direction.West, Direction.South);

    return leftDirections;
}