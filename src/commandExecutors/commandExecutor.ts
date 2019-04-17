import { RoverState } from "../roverState";

export interface CommandExecutor {
    execute(currentState: RoverState): RoverState;
}