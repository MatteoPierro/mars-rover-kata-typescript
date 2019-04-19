import { CommandExecutor } from './commandExecutors/commandExecutor';
import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";
import { RoverState } from "./roverState";
import { TurnRightCommandExecutor } from './commandExecutors/turnRightCommandExecutor';
import { TurnLeftCommandExecutor } from './commandExecutors/turnLeftCommandExecutor';
import { MoveBackwardCommandExecutor } from './commandExecutors/moveBackwardCommandExecutor';
import { MoveForwardCommandExecutor } from './commandExecutors/moveForwardCommandExecutor';
import { Grid } from './grid';

export class MarsRover {
    state: RoverState;
    private grid: Grid;
    private obstacles: Position[];

    constructor(startPosition: Position, startDirection: Direction, grid: Grid = new Grid(Number.MAX_VALUE, Number.MAX_VALUE), obstacles: Position[] = []) { 
        this.state = new RoverState(startPosition, startDirection);
        this.grid = grid;
        this.obstacles = obstacles;
    }

    executeCommands(commands: Command[]) {
        commands.forEach(command => {
            const executor = this.executorFor(command)
            this.state = executor.execute(this.state);
        });
    }

    private executorFor(command: Command): CommandExecutor  {
        switch (command) {
            case Command.TurnLeft :
                return new TurnLeftCommandExecutor();
            case Command.TurnRight :
                return new TurnRightCommandExecutor();
            case Command.MoveForward:
                return new MoveForwardCommandExecutor(this.grid, this.obstacles);
            case Command.MoveBackward:
                return new MoveBackwardCommandExecutor(this.grid, this.obstacles);
            default:
                throw "Unknown command!"
        }
    }
}