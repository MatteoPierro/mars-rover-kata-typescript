import { RoverState } from '../../src/roverState';
import { MoveBackwardCommandExecutor } from '../../src/commandExecutors/moveBackwardCommandExecutor';
import { Position } from "../../src/position";
import { Direction } from "../../src/direction";

describe('MoveBackwardCommandExecutor', () => {
    const executor = new MoveBackwardCommandExecutor();

    it('should move backward along y when is facing north and receive backward command', () => {
        const currentState = new RoverState(new Position(0, 1), Direction.North);

        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(0, 0));
    });

    it('should move forward along y when is facing south and receive backward command', () => {
        const currentState = new RoverState(new Position(0, 0), Direction.South);

        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(0, 1));
    });

    it('should move backward along x when is facing east and receive backward command', () => {
        const currentState = new RoverState(new Position(1, 0), Direction.East);

        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(0, 0));
    });

    it('should move forward along x when is facing west and receive backward command', () => {
        const currentState = new RoverState(new Position(0, 0), Direction.West);

        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(1, 0));
    });
});