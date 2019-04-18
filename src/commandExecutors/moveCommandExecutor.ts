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

    private newY(state: RoverState): number {
        return this.newCoordinate(
            state.position.y,
            state.direction,
            this.ySteps(),
            this.grid.y
        );
    }

    private newX(state: RoverState): number {
        return this.newCoordinate(
            state.position.x,
            state.direction,
            this.xSteps(),
            this.grid.x
        );
    }

    private newCoordinate(currentCoordinate: number, direction: Direction, steps: Map<Direction, number>, limit: number): number {
        const step = steps.get(direction);
        const newCoordinate = currentCoordinate + step;
        return threshold(newCoordinate, limit);
    }
}

function threshold(coordinate: number, limit: number): number {
    if (coordinate < 0) {
        return limit;
    } else if (coordinate > limit) {
        return 0;
    } else {
        return coordinate;
    }
}