import { RoverState } from "./roverState";
import { Position } from "./position";

export class MoveForwardCommandExecutor {
    execute(currentState: RoverState): RoverState {
        let newX = currentState.position.x;
        let newY = currentState.position.y + 1;
        let newPosition = new Position(newX, newY);
        let newDirection = currentState.direction;
        return new RoverState(newPosition, newDirection);
    }
}