import { Direction } from "./direction";
import { RoverState } from "./roverState";

export class TurnRightCommandExecutor {
    execute(currentState: RoverState): RoverState {
        let newPosition = currentState.position;
        let newDirection = rightDirections().get(currentState.direction);
        return new RoverState(newPosition, newDirection);
    }
}

function rightDirections(): Map<Direction, Direction> {
    const rightDirections = new Map<Direction, Direction>();

    rightDirections.set(Direction.North, Direction.East);
    rightDirections.set(Direction.South, Direction.West);
    rightDirections.set(Direction.East, Direction.South);
    rightDirections.set(Direction.West, Direction.North);

    return rightDirections;
}
