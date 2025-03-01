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

async function startWroker(env,options) {

    try {
        var { default: worker } = await importGlobal('@arikaim/server/queue/worker.js');
    }
    catch (e) {      
        errorMessage('Arikaim server package not installed');
        return false;
    }
    
    // run
    worker.run();
}

export default new Command()
    .name('start')
    .description('Start queue worker')
    .action(startWroker);
