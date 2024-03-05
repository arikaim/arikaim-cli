#!/usr/bin/env node

/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

'use strict';

import './src/global.js';
import { Command } from 'commander';
import { default as configCommand } from "@arikaim/arikaim/commands/create-config.js";
import { default as emailCommand } from "@arikaim/arikaim/commands/email/email.js";

writeLn('\nArikaim cli\n','blue');

const cli = new Command();

cli.version('0.0.1')
    .option('-help','Show help')
    .description('');

cli.command('help')
    .description('Help')
    .action((env, options) => {        
        writeLn('\nHelp\n');
});

cli.addCommand(configCommand);
cli.addCommand(emailCommand);

cli.parse();
