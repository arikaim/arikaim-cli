'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { File } from "@arikaim/arikaim/common/file.js";
import { Command } from 'commander';


function createConfig(env,options) {
}

export default new Command()
    .name('create')
    .description('Create default config file')
    .action(createConfig);
