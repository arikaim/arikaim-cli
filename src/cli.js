'use strict';

/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import '@arikaim/cli/common/global.js';
import Path from "@arikaim/cli/common/path.js"
import { Command } from 'commander';
import { default as configCommand } from "@arikaim/cli/commands/config/config.js";
import { default as emailCommand } from "@arikaim/cli/commands/email/email.js";
import { default as createCommand } from "@arikaim/cli/commands/create/create.js";
import { default as helpCommand } from "@arikaim/cli/commands/help.js";
import { default as startCommand } from "@arikaim/cli/commands/start.js";
import { default as serviceCommand } from "@arikaim/cli/commands/service/service.js";
import { default as queueCommand } from "@arikaim/cli/commands/queue/queue.js";

writeLn('\nArikaim  \n','blue');

export const cli = new Command();

cli.version('v0.0.5')
    .option('-help','Show help')
    .description('Arikaim CLI');

cli.addCommand(helpCommand);
cli.addCommand(configCommand);
cli.addCommand(emailCommand);
cli.addCommand(createCommand);
cli.addCommand(startCommand);
cli.addCommand(serviceCommand);
cli.addCommand(queueCommand);

// service commands
await loadServicesCommands();

async function loadServicesCommands() {
    try { 
        var { default: arikaimServer } = await import(Path.getServerPath());
        
        // add console commands from services 
        var commands = await arikaimServer.getConsoleCommands();

        commands.forEach(command => {
            cli.addCommand(command);
        });      

        return true;
    }
    catch (e) {       
        console.log(e.message);
        return false;      
    }   
}
