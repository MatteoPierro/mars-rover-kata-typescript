import { Position } from "./position";
import { Direction } from "./direction";
import { Command } from "./command";
import { RoverState } from "./roverState";
import { TurnRightCommandExecutor } from './turnRightCommandExecutor';
import { TurnLeftCommandExecutor } from './turnLeftCommandExecutor';
import { MoveBackwardCommandExecutor } from './moveBackwardCommandExecutor';
import { MoveForwardCommandExecutor } from './moveForwardCommandExecutor';

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