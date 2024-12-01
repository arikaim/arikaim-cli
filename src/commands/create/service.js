'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { mkdirSync, writeFileSync } from 'fs';
import Path from "@arikaim/cli/common/path.js";

function createService(env,options) {
    writeLn('Create service','green');
    // input name
    // create folder
    // create package descriptor 
    // create service class file

    
}

export default new Command()
    .name('service')
    .description('Create service')
    .action(createService);
