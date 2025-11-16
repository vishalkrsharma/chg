import { homedir } from 'os';
import { writeFileSync } from 'fs';
import chalk from 'chalk';

const CHG_CONFIG = '.chgconfig';
const HOME_DIR = homedir();
const CONFIG_PATH = `${HOME_DIR}/${CHG_CONFIG}`;

export const createConfigFile = async (): Promise<void> => {
  try {
    writeFileSync(CONFIG_PATH, '', { flag: 'wx' });

    console.log('Empty ' + chalk.green('.chgconfig') + ' file created successfully.');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'EEXIST') {
      console.error(chalk.red('Config file already exists.'));

      return;
    }

    console.error('Error creating config file:', error);
  }
};

export const setConfig = async (key: string, value: string): Promise<void> => {};
