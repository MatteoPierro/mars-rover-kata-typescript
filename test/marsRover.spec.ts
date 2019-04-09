import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";

describe('Mars Rover', () => {
    it('should start from a given initial point', () => {
        const rover = new MarsRover(new Position(0,0));
        
        expect(rover.position).toEqual(new Position(0,0));
    });
});