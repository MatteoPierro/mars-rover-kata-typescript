import { RoverState } from '../../src/roverState';
import { MoveBackwardCommandExecutor } from '../../src/commandExecutors/moveBackwardCommandExecutor';
import { Position } from "../../src/position";
import { Direction } from "../../src/direction";
import { Grid } from '../../src/grid';

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

    it('should move to x limit when is on the x origin and facing east and receive backward command', () => {
        const xLimit = 5;
        const executor = new MoveBackwardCommandExecutor(new Grid(xLimit, Number.MAX_VALUE));

        const currentState = new RoverState(new Position(0, 1), Direction.East);
        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(xLimit, 1));
    });

    it('should move to origin x when is on the edge and facing west and receive backward command', () => {
        const xLimit = 5;
        const executor = new MoveBackwardCommandExecutor(new Grid(xLimit, Number.MAX_VALUE));

        const currentState = new RoverState(new Position(xLimit, 1), Direction.West);
        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(0, 1));
    });

    it('should move to y limit when is on the y origin and facing north and receive Backward command', () => {
        const yLimit = 5;
        const executor = new MoveBackwardCommandExecutor(new Grid(Number.MAX_VALUE, yLimit));

        const currentState = new RoverState(new Position(1, 0), Direction.North);
        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(1, yLimit));
    });

    it('should move to y origin when is on the edge and facing south and receive Backward command', () => {
        const yLimit = 5;
        const executor = new MoveBackwardCommandExecutor(new Grid(Number.MAX_VALUE, yLimit));

        const currentState = new RoverState(new Position(1, yLimit), Direction.South);
        const newState = executor.execute(currentState);

        expect(newState.position).toEqual(new Position(1, 0));
    });
});