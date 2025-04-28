'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import Path from "@arikaim/cli/common/path.js"

async function runServer(env,options) {

    try {
        var { default: arikaimServer } = await import(Path.getServerPath());
    }
    catch (e) {      
        errorMessage('Arikaim server package not installed');
        return false;
    }
    
    // run
    arikaimServer.run();
}

export default new Command()
    .name('start')
    .description('Start server')
    .action(runServer);
