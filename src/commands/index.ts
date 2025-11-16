import { initCommand } from './initCommand';
import { addCommand } from './addCommand';
import { configCommand } from './configCommand';
import { Command } from 'commander';

export const registerCommands = (program: Command) => {
  program.addCommand(configCommand);
  program.addCommand(initCommand);
  program.addCommand(addCommand);
};
