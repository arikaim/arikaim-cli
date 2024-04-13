'use strict';

/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import '@arikaim/arikaim/common/global.js';
import { Command } from 'commander';
import { default as configCommand } from "@arikaim/arikaim/commands/config/config.js";
import { default as emailCommand } from "@arikaim/arikaim/commands/email/email.js";
import { default as createCommand } from "@arikaim/arikaim/commands/create/create.js";
import { default as helpCommand } from "@arikaim/arikaim/commands/help.js";
import { default as startCommand } from "@arikaim/arikaim/commands/start.js";
import { default as serviceCommand } from "@arikaim/arikaim/commands/service/service.js";
import { default as queueCommand } from "@arikaim/arikaim/commands/queue.js";

writeLn('\nArikaim\n','blue');

export const cli = new Command();

cli.version('0.0.3')
    .option('-help','Show help')
    .description('');

cli.addCommand(helpCommand);
cli.addCommand(configCommand);
cli.addCommand(emailCommand);
cli.addCommand(createCommand);
cli.addCommand(startCommand);
cli.addCommand(serviceCommand);
cli.addCommand(queueCommand);