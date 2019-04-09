import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";

describe('Mars Rover', () => {
    it('should start from a given initial point', () => {
        const startPosition = new Position(0, 0);

        const rover = new MarsRover(startPosition);
        
        expect(rover.position).toBe(startPosition);
    });
});