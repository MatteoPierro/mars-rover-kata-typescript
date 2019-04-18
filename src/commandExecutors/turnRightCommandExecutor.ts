import { Direction } from "../direction";
import { TurnCommandExecutor } from './turnCommandExecutor';

export class TurnRightCommandExecutor extends TurnCommandExecutor {
    protected directions(): Map<Direction, Direction> {
        const directions = new Map<Direction, Direction>();

        directions.set(Direction.North, Direction.East);
        directions.set(Direction.South, Direction.West);
        directions.set(Direction.East, Direction.South);
        directions.set(Direction.West, Direction.North);

        return directions;
    }
}