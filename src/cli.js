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
import { default as helpCommand } from "@arikaim/arikaim/commands/help.js";

writeLn('\nArikaim cli\n','blue');

const cli = new Command();

cli.version('0.0.3')
    .option('-help','Show help')
    .description('');

cli.addCommand(helpCommand);
cli.addCommand(configCommand);
cli.addCommand(emailCommand);

cli.parse();
