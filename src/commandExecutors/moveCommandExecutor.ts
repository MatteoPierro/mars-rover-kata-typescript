import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Position } from "../position";
import { Direction } from '../direction';

export abstract class MoveCommandExecutor implements CommandExecutor{
    execute(currentState: RoverState): RoverState {
        const xStep = this.xSteps().get(currentState.direction);
        const yStep = this.ySteps().get(currentState.direction);
        let newX = currentState.position.x + xStep;
        let newY = currentState.position.y + yStep;
        let newPosition = new Position(newX, newY);
        let newDirection = currentState.direction;
        return new RoverState(newPosition, newDirection);
    }

    protected abstract xSteps(): Map<Direction, number>;
    protected abstract ySteps(): Map<Direction, number>;
}