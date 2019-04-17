import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";
import { RoverState } from "./roverState";
import { TurnRightCommandExecutor } from './commandExecutors/turnRightCommandExecutor';
import { TurnLeftCommandExecutor } from './commandExecutors/turnLeftCommandExecutor';
import { MoveBackwardCommandExecutor } from './commandExecutors/moveBackwardCommandExecutor';
import { MoveForwardCommandExecutor } from './commandExecutors/moveForwardCommandExecutor';

export class MarsRover {
    state: RoverState;

    constructor(startPosition: Position, startDirection: Direction) { 
        this.state = new RoverState(startPosition, startDirection);
    }

    executeCommands(commands: Command[]) {
        commands.forEach(command => {
            this.state = this.execute(command);
        });
    }

    private execute(command: Command): RoverState  {
        switch (command) {
            case Command.TurnLeft :
                return new TurnLeftCommandExecutor().execute(this.state);
            case Command.TurnRight :
                return new TurnRightCommandExecutor().execute(this.state);
            case Command.MoveForward:
                return new MoveForwardCommandExecutor().execute(this.state);
            case Command.MoveBackward:
                return new MoveBackwardCommandExecutor().execute(this.state);
            default:
                throw "Unknown command!"
        }
    }
}