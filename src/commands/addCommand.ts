import { stageFile } from '../core/staging';
import { Command } from 'commander';

export const addCommand = new Command('add')
  .argument('<file>', 'File to add to staging')
  .description('Add a file to the staging area')
  .action(async (file) => {
    await stageFile(file);

    console.log(`Added ${file} to the staging area.`);
  });
