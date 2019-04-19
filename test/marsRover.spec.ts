import { RoverState } from './../src/roverState';
import { MarsRover } from "../src/marsRover";
import { Position } from "../src/position";
import { Direction } from "../src/direction";
import { Command } from "../src/command";
import { Grid } from '../src/grid';

describe('Mars Rover', () => {

    const startPosition = new Position(0, 0);
    const startDirection = Direction.North;

    it('should start from a given initial point', () => {
        const rover = new MarsRover(startPosition, startDirection);
        
        expect(rover.state.position).toBe(startPosition);
        expect(rover.state.direction).toBe(startDirection);
    });

    it('should direct to West when facing North and turning left',() =>  {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnLeft])

        expect(rover.state.direction).toBe(Direction.West);
    });

    it('should direct to East when facing North and turning right',() =>  {
        const startDirection = Direction.North;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnRight])

        expect(rover.state.direction).toBe(Direction.East);
    });

    it('should direct to East when facing South and turning left',() =>  {
        const startDirection = Direction.South;
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([Command.TurnLeft])

        expect(rover.state.direction).toBe(Direction.East);
    });

    it('should return to the starting point when turn left 4 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnLeft])

        expect(rover.state.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn righ 4 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnRight])

        expect(rover.state.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn righ 2 times then turn left 2 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnRight,
            Command.TurnRight,
            Command.TurnLeft,
            Command.TurnLeft])

        expect(rover.state.direction).toBe(startDirection);
    });

    it('should return to the starting point when turn left 2 times then turn right 2 times', () => {
        const rover = new MarsRover(startPosition, startDirection);

        rover.executeCommands([
            Command.TurnLeft,
            Command.TurnLeft,
            Command.TurnRight,
            Command.TurnRight])

        expect(rover.state.direction).toBe(startDirection);
    });

    it('should move forward along y when is facing north and receive forward command', () => {
        const rover = new MarsRover(new Position(0, 0), Direction.North);

        rover.executeCommands([Command.MoveForward]);
        
        expect(rover.state.position).toEqual(new Position(0, 1));
    });

    it('should move backward along y when is facing north and receive backward command', () => {
        const rover = new MarsRover(new Position(0, 1), Direction.North);

        rover.executeCommands([Command.MoveBackward]);
        
        expect(rover.state.position).toEqual(new Position(0, 0));
    });

    it('should return to origin x when is on the edge and facing east and receive forward command', () => {
        const xLimit = 5;
        const rover = new MarsRover(new Position(xLimit, 0), Direction.East, new Grid(xLimit,5));

        rover.executeCommands([Command.MoveForward]);

        expect(rover.state.position).toEqual(new Position(0, 0));
    });

    it('should return to origin', () => {
        const grid = new Grid(3,3);
        const rover = new MarsRover(new Position(0, 0), Direction.North, grid);

        rover.executeCommands([
            Command.MoveBackward,
            Command.TurnLeft,
            Command.MoveForward,
            Command.TurnRight,
            Command.MoveForward,
            Command.TurnLeft,
            Command.MoveBackward
        ]);

        expect(rover.state.position).toEqual(new Position(0, 0));
        expect(rover.state.direction).toEqual(Direction.West);
    });

    it('should avoid obstacles', () => {
        const grid = new Grid(2, 2);
        const obstacles = [new Position(1, 1), new Position(2, 2)];
        const rover = new MarsRover(new Position(0, 0), Direction.North, grid, obstacles);

        rover.executeCommands([
            Command.TurnRight,
            Command.MoveForward,
            Command.TurnLeft,
            Command.MoveForward,
            Command.TurnLeft,
            Command.MoveBackward,
            Command.TurnRight,
            Command.MoveForward,
            Command.MoveForward,
            Command.MoveForward,
            Command.TurnLeft,
            Command.MoveForward
        ]);

        expect(rover.state.position).toEqual(new Position(2, 1));
    });
});