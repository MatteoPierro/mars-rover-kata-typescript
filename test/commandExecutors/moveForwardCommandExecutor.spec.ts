import { RoverState } from './../../src/roverState';
import { MoveForwardCommandExecutor } from './../../src/commandExecutors/moveForwardCommandExecutor';
import { Position } from "../../src/position";
import { Direction } from "../../src/direction";

describe('MoveForwardCommandExecutor', () => {
    const executor = new MoveForwardCommandExecutor();

    it('should move forward along y when is facing north and receive forward command', () => {
        const currentState = new RoverState(new Position(0, 0), Direction.North);

        const newState = executor.execute(currentState);
        
        expect(newState.position).toEqual(new Position(0, 1));
    });
   
    it('should move forward along x when is facing east and receive forward command', () => {
        const currentState = new RoverState(new Position(0, 0), Direction.East);

        const newState = executor.execute(currentState);
        
        expect(newState.position).toEqual(new Position(1, 0));
    });

    it('should move backward along x when is facing west and receive forward command', () => {
        const currentState = new RoverState(new Position(1, 0), Direction.West);

        const newState = executor.execute(currentState);
        
        expect(newState.position).toEqual(new Position(0, 0));
    });

    it('should move backward along y when is facing south and receive forward command', () => {
        const currentState = new RoverState(new Position(0, 1), Direction.South);

        const newState = executor.execute(currentState);
        
        expect(newState.position).toEqual(new Position(0, 0));
    });
});