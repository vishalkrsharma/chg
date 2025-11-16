import { createConfigFile, setConfig } from '../services/configService';
import { Command } from 'commander';

export const configCommand = new Command('config')
  .description('Manage repository or global configuration')
  .addCommand(
    new Command('init').description('Initialize configuration file').action(async () => {
      await createConfigFile();
    })
  )
  .addCommand(
    new Command('set')
      .argument('<key>', 'Configuration key (e.g. user.name)')
      .argument('<value>', 'Configuration value')
      .description('Set a configuration value')
      .action(async (key, value) => {
        await setConfig(key, value);
      })
  );
