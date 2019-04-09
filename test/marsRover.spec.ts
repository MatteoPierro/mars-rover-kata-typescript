import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";
import { Direction } from "../src/direction";
import { Command } from "../src/command";

describe('Mars Rover', () => {

    const startPosition = new Position(0, 0);
    it('should start from a given initial point', () => {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);
        
        expect(rover.position).toBe(startPosition);
        expect(rover.direction).toBe(startDirection);
    });

    it('should direct to West when facing North and turning left',() =>  {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnLeft])

        expect(rover.direction).toBe(Direction.West);
    })
});