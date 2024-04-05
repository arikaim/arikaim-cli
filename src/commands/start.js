'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';

async function runServer(env,options) {

    try {
        var { default: ArikaimServicesServer } = await import('@arikaim/server/server.js');
    }
    catch (e) {
        console.log(e);
        errorMessage('Arikaim server package not installed');
        return false;
    }

    const server = new ArikaimServicesServer();
    // boot
    await server.boot();
    // run
    server.run();
}

export default new Command()
    .name('start')
    .description('Start server')
    .action(runServer);
