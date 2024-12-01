'use strict';

/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import '@arikaim/cli/common/global.js';
import { Command } from 'commander';
import { default as configCommand } from "@arikaim/cli/commands/config/config.js";
import { default as emailCommand } from "@arikaim/cli/commands/email/email.js";
import { default as createCommand } from "@arikaim/cli/commands/create/create.js";
import { default as helpCommand } from "@arikaim/cli/commands/help.js";
import { default as startCommand } from "@arikaim/cli/commands/start.js";
import { default as serviceCommand } from "@arikaim/cli/commands/service/service.js";
import { default as queueCommand } from "@arikaim/cli/commands/queue.js";

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

cli.action(loadServicesCommands);

async function loadServicesCommands() {
    
    try {
        var { arikaimServer: arikaimServer } = await import('@arikaim/server/server.js');
        // services 
        writeLn('\Load services console commands\n','green');
        console.log(arikaimServer.services);
    }
    catch (e) {   
        return false;
    }
}
