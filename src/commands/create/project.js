'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { mkdirSync } from 'fs';
import Path from "@arikaim/arikaim/common/path.js";


function createFolder(path) {
    mkdirSync(path,{ recursive: true });
    writeLn('Created folder','green');
    writeLn(Path.getRelative(path));
}

function createProjectFolders(env,options) {
    // create config dir
    createFolder(Path.config());
    // create view path
    createFolder(Path.view());
    // create templates path
    createFolder(Path.templates());
    // create libraries path
    createFolder(Path.libraries());
    // create sevices path
    createFolder(Path.services());
    // create storage path
    createFolder(Path.storage());
    // create storage public path
    createFolder(Path.publicStorage());

    writeLn('Done\n','green');
}

export default new Command()
    .name('project')
    .description('Create project folders')
    .action(createProjectFolders);