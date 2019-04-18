import { CommandExecutor } from './commandExecutor';
import { RoverState } from "../roverState";
import { Position } from "../position";
import { Direction } from '../direction';
import { Grid } from '../grid';

export abstract class MoveCommandExecutor implements CommandExecutor {
    private grid: Grid;

    constructor(grid: Grid = new Grid(Number.MAX_VALUE, Number.MAX_VALUE)) {
        this.grid = grid;
    }

    protected abstract xSteps(): Map<Direction, number>;
    protected abstract ySteps(): Map<Direction, number>;

    execute(currentState: RoverState): RoverState {
        const newX = this.newX(currentState);
        const newY = this.newY(currentState);
        const newPosition = new Position(newX, newY);
        const newDirection = currentState.direction;
        return new RoverState(newPosition, newDirection);
    }

    private newY(currentState: RoverState): number {
        const yStep = this.ySteps().get(currentState.direction);
        const newY = currentState.position.y + yStep;
        if (newY < 0) {
            return this.grid.y;
        } else if (newY > this.grid.y) {
            return 0;
        } else {
            return newY;
        }
    }

    private newX(currentState: RoverState): number {
        const xStep = this.xSteps().get(currentState.direction);
        const newX = currentState.position.x + xStep;
        if (newX < 0) {
            return this.grid.x;
        } else if (newX > this.grid.x) {
            return 0;
        } else {
            return newX;
        }
    }
}