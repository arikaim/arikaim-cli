'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';


function showHelp(env,options) {
    console.log('Help');
}

export default new Command()
    .name('help')
    .description('Help')
    .action(showHelp);
