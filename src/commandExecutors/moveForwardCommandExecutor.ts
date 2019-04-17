import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Position } from "../position";
import { Direction } from '../direction';

export class MoveForwardCommandExecutor implements CommandExecutor{
    execute(currentState: RoverState): RoverState {
        const xStep = xSteps().get(currentState.direction);
        const yStep = ySteps().get(currentState.direction);
        let newX = currentState.position.x + xStep;
        let newY = currentState.position.y + yStep;
        let newPosition = new Position(newX, newY);
        let newDirection = currentState.direction;
        return new RoverState(newPosition, newDirection);
    }
}

function xSteps(): Map<Direction, number> {
    const steps = new Map<Direction, number>();

    steps.set(Direction.North, 0);
    steps.set(Direction.East, 1);
    steps.set(Direction.West, -1);
    steps.set(Direction.South, 0);

    return steps;
}

function ySteps(): Map<Direction, number> {
    const steps = new Map<Direction, number>();

    steps.set(Direction.North, 1);
    steps.set(Direction.East, 0);
    steps.set(Direction.West, 0);
    steps.set(Direction.South, -1);

    return steps;
}