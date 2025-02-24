'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { importGlobal } from 'import-global';

async function runServer(env,options) {

    try {
        var { default: arikaimServer } = await importGlobal('@arikaim/server/server.js');
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
