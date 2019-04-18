import { Direction } from "../direction";
import { TurnCommandExecutor } from './turnCommandExecutor';

export class TurnLeftCommandExecutor extends TurnCommandExecutor {
    protected directions(): Map<Direction, Direction> {
        const directions = new Map<Direction, Direction>();

        directions.set(Direction.North, Direction.West);
        directions.set(Direction.South, Direction.East);
        directions.set(Direction.East, Direction.North);
        directions.set(Direction.West, Direction.South);

        return directions;
    }
}