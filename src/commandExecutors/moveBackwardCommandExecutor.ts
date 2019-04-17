import { MoveCommandExecutor } from './moveCommandExecutor';
import { Direction } from '../direction';

export class MoveBackwardCommandExecutor extends MoveCommandExecutor {
    protected xSteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.North, 0);
        steps.set(Direction.East, -1);
        steps.set(Direction.West, 1);
        steps.set(Direction.South, 0);

        return steps;
    }

    protected ySteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.North, -1);
        steps.set(Direction.East, 0);
        steps.set(Direction.West, 0);
        steps.set(Direction.South, 1);

        return steps;
    }
}