#!/usr/bin/env node

import { program } from 'commander';
import { registerCommands } from './commands';

program.name('chg').description('A simple VCS').version('0.1.0');

registerCommands(program);

program.parse(process.argv);
