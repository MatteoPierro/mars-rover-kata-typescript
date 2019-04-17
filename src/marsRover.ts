import { CommandExecutor } from './commandExecutors/commandExecutor';
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
            const executor = this.executeFor(command)
            this.state = executor.execute(this.state);
        });
    }

    private executeFor(command: Command): CommandExecutor  {
        switch (command) {
            case Command.TurnLeft :
                return new TurnLeftCommandExecutor();
            case Command.TurnRight :
                return new TurnRightCommandExecutor();
            case Command.MoveForward:
                return new MoveForwardCommandExecutor();
            case Command.MoveBackward:
                return new MoveBackwardCommandExecutor();
            default:
                throw "Unknown command!"
        }
    }
}