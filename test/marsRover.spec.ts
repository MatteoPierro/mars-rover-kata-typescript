import { MarsRover } from "../src/marsRover";

describe('Mars Rover', () => {
    it('should start from a given initial point', () => {
        const rover = new MarsRover(0,0);
        
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(0);
    });
});