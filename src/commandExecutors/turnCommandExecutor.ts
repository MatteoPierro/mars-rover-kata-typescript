import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Direction } from "../direction";

export abstract class TurnCommandExecutor implements CommandExecutor {
    execute(currentState: RoverState): RoverState {
        const newPosition = currentState.position;
        const newDirection = this.directions().get(currentState.direction);
        return new RoverState(newPosition, newDirection);
    }

    protected abstract directions(): Map<Direction, Direction>;
}