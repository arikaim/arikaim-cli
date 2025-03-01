'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';

async function runQueueWorker(env,options) {

    try {
        var { default: QueueWorker } = await import('@arikaim/server/queue/worker.js');
    }
    catch (e) {
        errorMessage('Arikaim queue package not installed');
        return false;
    }

    const worker = new QueueWorker();
}

export default new Command()
    .name('queue')
    .description('Start queue worker')
    .action(runQueueWorker);