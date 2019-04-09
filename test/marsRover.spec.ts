import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";
import { Direction } from "../src/direction";
import { Command } from "../src/command";

describe('Mars Rover', () => {

    const startPosition = new Position(0, 0);
    const startDirection = Direction.North;

    it('should start from a given initial point', () => {
        const rover = new MarsRover(startPosition, startDirection);
        
        expect(rover.position).toBe(startPosition);
        expect(rover.direction).toBe(startDirection);
    });

    it('should direct to West when facing North and turning left',() =>  {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnLeft])

        expect(rover.direction).toBe(Direction.West);
    });

    it('should direct to East when facing North and turning right',() =>  {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnRight])

        expect(rover.direction).toBe(Direction.East);
    });

    it('should direct to East when facing South and turning left',() =>  {
        const startDirection = Direction.South;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnLeft])

        expect(rover.direction).toBe(Direction.East);
    });

    it('should return to the starting point when turn left 4 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnLeft])

        expect(rover.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn righ 4 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnRight])

        expect(rover.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn righ 2 times then turn left 2 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnLeft,
            Command.TurnLeft])

        expect(rover.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn left 2 times then turn right 2 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnRight,
            Command.TurnRight])

        expect(rover.direction).toBe(startDirection);
    });
});