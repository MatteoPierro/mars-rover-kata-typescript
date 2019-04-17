import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Position } from "../position";
import { Direction } from '../direction';

export abstract class MoveCommandExecutor implements CommandExecutor{
    execute(currentState: RoverState): RoverState {
        const xStep = this.xSteps().get(currentState.direction);
        const yStep = this.ySteps().get(currentState.direction);
        const newX = currentState.position.x + xStep;
        const newY = currentState.position.y + yStep;
        const newPosition = new Position(newX, newY);
        const newDirection = currentState.direction;
        return new RoverState(newPosition, newDirection);
    }

    protected abstract xSteps(): Map<Direction, number>;
    protected abstract ySteps(): Map<Direction, number>;
}