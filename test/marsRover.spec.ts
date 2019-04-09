import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";
import { Direction } from "../src/direction";

describe('Mars Rover', () => {
    it('should start from a given initial point', () => {
        const startPosition = new Position(0, 0);
        const startDirection = Direction.North;

        const rover = new MarsRover(startPosition, startDirection);
        
        expect(rover.position).toBe(startPosition);
        expect(rover.direction).toBe(startDirection);
    });
});