'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import ArikaimPackage from "@arikaim/cli/common/package.js";

function disableService(args, options) {
    writeLn('Disable service','green');   
    writeLn(args);
    
    var descriptor = ArikaimPackage.loadPackageDescriptor(args,'service');
    if (descriptor == null) {
        errorMessage('Not valid service package descriptor.');
    }
    
    descriptor['disabled'] = true;

    var result = ArikaimPackage.writePackageDescriptor(args,descriptor,'service');

    if (result !== false) {
        writeLn('\nDone','green');   
    } else {
        errorMessage('Error write service package descriptor');
    }
}

export default new Command()
    .name('disable')
    .argument('name','Service name')
    .description('Disable service')
    .action(disableService);
